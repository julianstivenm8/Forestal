import React from 'react';
import { StyleSheet, Text, View ,TouchableHighlight, AppRegistry ,Button,Image} from 'react-native';
import { Font } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigator ,DrawerNavigator} from 'react-navigation';
import * as firebase from 'firebase';
import { Constants} from 'expo';
import PasoUno from '../pasos/pasoUno.js'


export default class HerramientaAforos extends React.Component  {
  static navigationOptions = {
    tabBarLabel: 'Home',
    header : null,
      headerStyle: { marginTop: Constants.statusBarHeight },
  };

  constructor(props){
    super(props)
    this.state={
      //Entrada-------------------------------------------->
      diasDescanso:11,
      areaPotrero:24375,
      areaFranja:813,//* No modificar m2
      numeroFranjas:30,
      diasOcupacion:1,//por franja
      //PesoMetroLineal-------------------------------------------->
      pesoBajo:750,
      pesoMedio:1400,
      pesoAlto:4700,
      //PesoMetroCuadrado-------------------------------------------->
      pesoCuadradoBajo:500,
      pesoCuadradoMedio:1300,
      pesoCuadradoAlto:1700,
      //Calificación visual-------------------------------------------->
      visualLineal:[3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,1,1,1,1,1],
      visualMetrosCuadrados:[3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1],
      //Paso Cuatro (Cualidades Extra)*----------------------------------------->
      sinForraje:0.8,
      sinArbustiva:0,
      //Paso Ocho (Cualidades Extra)-------------------------------------------->
      distanciaSurcosArbustiva:2.5,//metros*
      kgForrajeLineal:0,
      kgForrajeCuadrados:0,
      //pasoOnce (Peso de las vacas dependiendo de la edad)------------------------->
      inventarioAnimal:[
        {genero:'macho',edad:'0>=1',peso:60},
        {genero:'macho',edad:'levante',peso:120},
        {genero:'macho',edad:'ceba',peso:275},
        {genero:'macho',edad:'2=<toretes',peso:300},
        {genero:'macho',edad:'3=<toretes',peso:450},
        {genero:'hembra',edad:'0>=1',peso:150},
        {genero:'hembra',edad:'levante',peso:180},
        {genero:'hembra',edad:'vientre',peso:300},
        {genero:'hembra',edad:'Escoteras',peso:400},
        {genero:'hembra',edad:'Paridas',peso:400},
      ],
      cantidadVacas:22,
    }
  }

  functionLineal(kgForrajeLineal) {
  let itemUno=this.state.visualLineal.filter(function(item){
        return item === 1;
    });
  let itemDos=this.state.visualLineal.filter(function(item){
        return item === 2;
    });
  let itemTres=this.state.visualLineal.filter(function(item){
        return item === 3;
    });
  let itemTotal= itemUno.length+itemDos.length+itemTres.length;
  //Paso Tres ---------------------------------------->
  let proporcionBajo= itemUno.length/ itemTotal;
  let proporcionMedio= itemDos.length/ itemTotal;
  let proporcionAlto= itemTres.length/ itemTotal;
  //Paso seis ---------------------------------------->
  let grKg=1000;
  let kgmLinealBajo=(proporcionBajo*this.state.pesoBajo)/grKg;
  let kgmLinealMedio=(proporcionMedio*this.state.pesoMedio)/grKg;
  let kgmLinealAlto=(proporcionAlto*this.state.pesoAlto)/grKg;
  let kgmTotal=kgmLinealBajo+kgmLinealAlto+kgmLinealMedio;
  //Paso Ocho ---------------------------------------->
  //- Descontar el área ocupada por los árboles en cada franja:multiplicando la proporción de esta (Paso 4) X el área (m2)
  let areaSinArbustiva=this.state.sinArbustiva*this.state.areaFranja;
  let areaFranjaSinArbustiva=this.state.areaFranja-areaSinArbustiva;
  let metrosLinealesArbustiva=areaFranjaSinArbustiva/this.state.distanciaSurcosArbustiva;
  this.setState(previousState => {
    return { kgForrajeLineal:metrosLinealesArbustiva*kgmTotal}});
   console.log(this.state.kgForrajeLineal);
   console.log(this.state.pesoAlto);
}

functionCuadrado() {
let itemUno=this.state.visualMetrosCuadrados.filter(function(item){
      return item === 1;
  });
let itemDos=this.state.visualMetrosCuadrados.filter(function(item){
      return item === 2;
  });
let itemTres=this.state.visualMetrosCuadrados.filter(function(item){
      return item === 3;
  });
let itemTotal= itemUno.length+itemDos.length+itemTres.length;
//Paso Tres ---------------------------------------->
let proporcionBajo= itemUno.length/ itemTotal;
let proporcionMedio= itemDos.length/ itemTotal;
let proporcionAlto= itemTres.length/ itemTotal;
//Paso seis ---------------------------------------->
let grKg=1000;
let kgmLinealBajo=(proporcionBajo*this.state.pesoCuadradoBajo)/grKg;
let kgmLinealMedio=(proporcionMedio*this.state.pesoCuadradoMedio)/grKg;
let kgmLinealAlto=(proporcionAlto*this.state.pesoCuadradoAlto)/grKg;
let kgmTotal=kgmLinealBajo+kgmLinealAlto+kgmLinealMedio;
//Paso Siete ---------------------------------------->
//this.setState.kgForrajeCuadrados=kgmTotal*this.state.areaFranja;
this.setState(previousState => {
  return { kgForrajeCuadrados:kgmTotal*this.state.areaFranja}});
console.log(this.state.kgForrajeCuadrados);
}
segundaParte(){
  //Paso Nueve ---------------------------------------->
  let totalForrajeFranja=this.state.kgForrajeLineal+this.state.kgForrajeCuadrados;
  //Paso Dies ---------------------------------------->
  let forrajeNoAprobechable=totalForrajeFranja*40/100;
  let forrajeRealmenteAprobechado=totalForrajeFranja-forrajeNoAprobechable;
  //Paso Once ---------------------------------------->
  let uGG=(this.state.cantidadVacas*400)/450;
  let promedioPesoAnimal=uGG*450/this.state.cantidadVacas;
  //Paso Doce ---------------------------------------->
  let forrajeVerdeConsumido=promedioPesoAnimal*12/100;//Forraje verde consumido animal/día de ocupación
  //Paso Trece Uno ---------------------------------------->
  let totalAnimalesFranjaUno=forrajeRealmenteAprobechado/forrajeVerdeConsumido;
  //Paso Trece Dos (Con dias de ocupación)  ---------------------------------------->
  let totalAnimalesFranjaDos=forrajeRealmenteAprobechado/forrajeVerdeConsumido*this.state.diasOcupacion;
  //Paso Catorce ---------------------------------------->
  let forrajeVerdeDiario=(this.state.cantidadVacas*400)*12/100;
  let requerimientoForrajeVerdeDiario=forrajeRealmenteAprobechado-forrajeVerdeDiario;
  let animalesNoPueden=Math.round(totalAnimalesFranjaDos-this.state.cantidadVacas);
  console.log(forrajeVerdeDiario);
  console.log(requerimientoForrajeVerdeDiario);
  console.log(animalesNoPueden);
}


  saveForm(){
    try{
      this.state.alto ? Helpers.setUserAlto(this.state.alto) :null
      this.state.medio ? Helpers.setUserMedio(this.state.medio) :null
      this.state.bajo ? Helpers.setUserBajo(this.state.bajo) :null
      this.state.areaPotrero ? Helpers.setUserPotrero(this.state.areaPotrero) :null
    }catch(error){
      console.log(error)
    }
  }

changePeso(newPeso){
  this.setState({
    pesoAlto:newPeso
  });
}

  render() {

      const { navigate } = this.props.navigation;

    return (


      <View style={  styles.containerDos}>

<View style={ {flex:1}, styles.container}>
        <View style={styles.logoText}>
        <Image style={{width:130,height:22}}
        source={require('../../assets/image/logoUno.png')}/>
            </View>
            </View>

        <View style={{flex:3},styles.container}>

                <TouchableHighlight>
                  <Text onPress={this.functionLineal.bind(this)} style={styles.inputBox}>Lineal</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                  <Text onPress={this.functionCuadrado.bind(this)} style={styles.inputBox}>Cuadrado</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                  <Text onPress={this.segundaParte.bind(this)} style={styles.inputBox}>Resultado</Text>
                </TouchableHighlight>
                <PasoUno changePeso={this.changePeso.bind(this)}/>


        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
   width: 24,
   height: 24,
 },
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    //backgroundColor: '#fff',
    alignItems: 'center',
  //  width: 320,
  //  height: 60,
  //  backgroundColor:'white',
  //  borderRadius: 6,
//  boxshadow: 1 2.97 12 'darkgray',
  //  shadowColor: 'red',
  //  shadowRadius: 50,
  //  margin: 40 ,
    padding: 30,
  },

  containerDos:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoText:{
    marginVertical:0,
  },

  buttonText:{
    fontSize:16,
    backgroundColor:'#A51414',
    color:'#ffff',
    marginVertical:10,
    width:199,
    borderRadius:25,
    textAlign:'center',
    paddingVertical:9,
  },
  inputBox: {
    width:110,
    backgroundColor:'#ffff',
    borderRadius:10,
    textAlign:'center',
    fontSize:14,
    color:'#A51414',
    marginVertical:10,
    marginHorizontal:10,
    borderWidth:1.286,
    borderColor:'#A51414',
    paddingVertical:15,
  },
});
