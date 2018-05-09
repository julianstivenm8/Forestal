import React from 'react';
import {  StyleSheet, Text,TouchableHighlight, View  , Button ,TextInput,Image} from 'react-native';
import { Font } from 'expo';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants} from 'expo';
import Helpers from '../../lib/helpers.js'
import PasoUno from './pasoUno'

export default class PasoTres extends React.Component {
  static navigationOptions = ({ navigation }) => {
       return {
          headerStyle: { marginTop: Constants.statusBarHeight },
       };
   };

  constructor(props){
    super(props)
    this.state={
        userId:'',
      //Entrada-------------------------------------------->
      diasDescanso:11,
      areaPotrero:24375,
      areaFranja:813,//* No modificar m2
      numeroFranjas:30,
      diasOcupacion:1,//por franja
      //PesoMetroLineal-------------------------------------------->
      pesoBajo:0,
      pesoMedio:0,
      pesoAlto:0,
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
      //Resultados ---------------------------------->
      forrajeVerdeDiario:0,
      requerimientoForrajeVerdeDiario:0,
      animalesNoPueden:0,
      uGG:0,
      activo:true,

    }

  }

  async componentWillMount(){
  /*let params= this.props.navigation.state

console.log('params' + params);
  this.setState({params})*/

    try {
      let user = await firebase.auth().currentUser;
      this.setState({
        userId:user.uid
      })

      Helpers.getUserAlto(this.state.userId,(pesoAlto) =>{
        this.setState({pesoAlto:pesoAlto})
        console.log('Helpers_pesoAlto ' + this.state.pesoAlto);
      }).then(() =>{console.log('then ' + state.pesoAlto)})
      console.log('AfueraDeHelpers ' + this.state.pesoAlto);

      Helpers.getUserMedio(this.state.userId,(pesoMedio) =>{
        this.setState(previousState => {
          return { pesoMedio:parseInt(pesoMedio)}});
      })
      Helpers.getUserBajo(this.state.userId,(pesoBajo) =>{
        this.setState(previousState => {
          return { pesoBajo:pesoBajo}});
      })

    } catch (error) {
      console.log(error);
    }

    console.log('componentWillMount_pesoAlto ' + this.state.pesoAlto);
    console.log('componentWillMount_pesoMedio ' + this.state.pesoMedio);
    console.log('componentWillMount_pesoBajo ' + this.state.pesoBajo);
    console.log('componentWillMount_user ' + this.state.userId);

    this.functionCuadrado();
    this.functionLineal();
    this.segundaParte();


  }
componentDidMount(){

  console.log('componentDidMount_pesoAlto ' + this.state.pesoAlto);
  console.log('componentDidMount_pesoMedio ' + this.state.pesoMedio);
  console.log('componentDidMount_pesoBajo ' + this.state.pesoBajo);
  console.log('componentDidMount_user ' + this.state.userId);
  if(this.state.pesoAlto!=0){
  this.functionCuadrado();
  this.functionLineal();
  this.segundaParte();
}
}
renderPasoUno() {

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
     console.log('funcion lineal' + this.state.kgForrajeLineal);
     console.log('funcion lineal_pesoAlto' + this.state.pesoAlto);
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
  console.log('funcion cuadrado' + this.state.kgForrajeCuadrados);
   console.log('funcion cuadrado_pesoMedio' + this.state.pesoMedio);
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
    this.setState(previousState => {
      return { forrajeVerdeDiario:forrajeVerdeDiario}});
      this.setState(previousState => {
        return { requerimientoForrajeVerdeDiario:requerimientoForrajeVerdeDiario}});
        this.setState(previousState => {
          return { animalesNoPueden:animalesNoPueden}});
          this.setState(previousState => {
            return { uGG:uGG}});
console.log('segunda parte_pesoBajo' + this.state.pesoBajo);
  }

iniciarOperaciones(){
  if(this.state.activo){

this.setState(previousState => {
  return { activo:false}});
}
}

  render() {
      const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={[styles.shadow]}>
          <View style={styles.containerBlue}>
            <Image
              style={styles.image}
              source={require('../../assets/image/paso03.png')}
              resizeMode='cover'
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.greenText}>¡Haz terminado tu protocolo!</Text>
            <Text style={styles.redText}>Observa los datos que te mostramos a continuación. Aquí te mostramos que decisiones debes tomar respecto a tu sistema.</Text>
          </View>
        </View>
        <View style={styles.containerDos}>
          {this.iniciarOperaciones()}
            <View style={styles.containerTres}>
                <Text style={styles.mediumRedText}>INVENTARIO GANADERO (ANIMALES)</Text>
                <Text style={styles.boldRedText}>{this.state.cantidadVacas}</Text>
            </View>
{/*
              <View style={styles.containerTres}>
                  <Text style={styles.mediumRedText}>INVENTARIO GANADERO (UGG)</Text>
                  <Text style={styles.boldRedText}>{this.state.uGG}</Text>
              </View>

             <View style={styles.containerTres}>
               <Text style={styles.mediumRedText}>FORRAJE VERDE DIARIO (KG)</Text>
               <Text style={styles.boldRedText}>{this.state.forrajeVerdeDiario}</Text>
             </View>

             <View style={styles.containerTres}>
               <Text style={styles.mediumRedText}>BALANCE PRODUC. FORRAJE VERDE/FRANJA</Text>
               <Text style={styles.boldRedText}>{this.state.requerimientoForrajeVerdeDiario}</Text>
             </View>
        */}
            <View style={styles.containerTres}>
               <Text style={styles.downBoldRedText}>Animales que no pueden permanecer en el sistema ({this.state.animalesNoPueden})</Text>

             </View>

           <View style={styles.containerTres}>
             <TouchableHighlight>
               <Text style={styles.buttonText} onPress={() => navigate('DrawerMuestra',{user:'DrawerMuestra'})}>Volver a las Muestras</Text>
             </TouchableHighlight>
             </View>
        </View>
      </View>

    );
  }
}



const border=(color) =>{
  return{
    borderColor:color,
    borderWidth:7,

  }
}

const styles = StyleSheet.create({
  image: {
    width:103,
    height:19,
  },
  redText:{
    fontSize:16,
    color:'#A91414',
      textAlign:'center',
  },
  mediumRedText:{
    fontSize:16,
    color:'#A91414',
    textAlign:'center',
  },
  boldRedText:{
    fontSize:21,
    color:'#A91414',
    textAlign:'left',
      fontWeight: 'bold',
  },
  downBoldRedText:{
    fontSize:21,
    color:'#A91414',
    textAlign:'center',
      fontWeight: 'bold',
  },
  greenText:{
    fontSize:16,
    color:'#2B7B3D',
    textAlign:'center',
  },
  buttonText:{
    fontSize:20,
    backgroundColor:'#A51414',
    color:'#ffff',
    marginVertical:10,
    width:199,
    borderRadius:25,
    textAlign:'center',
    paddingVertical:9,
  },
  container: {
    flex: 2,
    backgroundColor: '#b50000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerText: {
    flex: 2,
  backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
    borderWidth:20,
    borderColor:'white'
  },
  containerDos: {
    flex: 2,
      flexDirection: 'column',
    //backgroundColor: '#fff',
    //alignItems: 'stretch',
    //  alignItems: 'center',
    justifyContent: 'space-between',
      marginVertical:30,
        marginHorizontal:50,
  },
  containerTres: {
  //  flexDirection: 'row',
  //  backgroundColor: '#fff',
    alignItems: 'center',
 justifyContent: 'center',
  },
  shadow:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  borderWidth: 1,
  borderRadius: 9,
  borderColor: '#ddd',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: -1 },
  shadowOpacity: 4,
  shadowRadius: 9,
  elevation: 1,
  marginHorizontal:25,
  marginTop: 30,
  },
  containerBlue: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:13,
  },

});
