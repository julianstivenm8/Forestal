import React from 'react';
import {  StyleSheet, Text,TouchableHighlight, View  , Button ,TextInput,Image,InteractionManager} from 'react-native';
import { Font } from 'expo';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants} from 'expo';
import Helpers from '../../lib/helpers.js';
import Swiper from 'react-native-swiper';

//const { width, height } = Dimensions.get('window')

/*export function Clock(props) {
  var [ pesoAlto, pesoMedio, pesoBajo ] = [
    props.pesoAlto,
    props.pesoMedio,
    props.pesoBajo
  ];

};*/
export default class PasoUno extends React.Component {
   static navigationOptions = ({ navigation }) => {
        return {
           headerStyle: { marginTop: Constants.statusBarHeight },
        };
    };


  constructor(props){
    var database = firebase.database();
    super(props)
    this.state={
      userId:'',
      pesoAlto:0,
      pesoMedio:0,
      pesoBajo:0,
      pesoPorcentaje:50
    }
  }

async componentWillMount(){
 /*InteractionManager.runAfterInteractions(() => {
    const pesoAlto = this.state.pesoAlto;
    const pesoMedio = this.state.pesoMedio;
    const pesoBajo = this.state.pesoBajo;
let params = {
  pesoAlto : pesoAlto,
  pesoMedio : pesoMedio,
  pesoBajo : pesoBajo

}

  // this.props.navigation.setParams({ params });

});*/

  try {
    let user = await firebase.auth().currentUser;
    this.setState({
      userId:user.uid
    })
  } catch (error) {
    console.log(error);
  }
}
/*
  function writeUserData(userId,pesoAlto, pesoMedio, pesoBajo) {
    firebase.database().ref('users/' + userId).set({
      pesoAlto: this.state.pesoAlto,
      pesoMedio: this.state.pesoMedio,
      pesoBajo: this.state.pesoBajo
    });
  }*/
/*
  onPesoPress(){
    this.setState({error:'', loading:true});

    const {userId,pesoAlto, pesoMedio, pesoBajo} =this.state;
    firebase.database().ref('users/' + userId).set({
      pesoAlto: this.state.pesoAlto,
      pesoMedio: this.state.pesoMedio,
      pesoBajo: this.state.pesoBajo
    })
    .then(()=>{
      this.setState({error:'', loading:false})
      this.props.navigation.navigate('PasoDos');
    })
    .catch(()=>{
      this.setState({error:'No pudimos encontrar tu cuenta',loading:false});
    })
  }*/

/*  handlePesoAlto = (peso) => {
      this.setState({ pesoAlto: peso })
   }
 handlePesoMedio = (peso) => {
     this.setState({ pesoMedio: peso })
  }
 handlePesoBajo = (peso) => {
     this.setState({ pesoBajo: peso })
  }
 send = (pesoAlto, pesoMedio,pesoBajo) => {
  //   alert('pesoAlto: ' + pesoAlto + ' pesoMedio: ' + pesoMedio + ' pesoBajo '+ pesoBajo)
  //this.props.changePeso(pesoAlto);
//  this.props.navigation('HerramientaAforos',{user:'HerramientaAforos'})


}*/

  saveForm(){

        // this.setState({ pesoPorcentaje: 50 });
    if(this.state.userId){
      try{
        this.state.pesoAlto ? Helpers.setUserAlto(this.state.userId,this.state.pesoAlto) :null
        this.state.pesoMedio ? Helpers.setUserMedio(this.state.userId,this.state.pesoMedio) :null
        this.state.pesoBajo ? Helpers.setUserBajo(this.state.userId,this.state.pesoBajo) :null
        this.state.pesoPorcentaje ? Helpers.setUserPorcentaje(this.state.userId,this.state.pesoPorcentaje) :null
this.props.navigation.navigate('PasoDos');
      }catch(error){
        console.log(error)
      }
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
              source={require('../../assets/image/paso01.png')}
              resizeMode='cover'
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.redText}>Tome una muestra correspondiente a cada altura de la arbustiva (alta, media, baja) y registre su peso en kilogramos en cada uno de los campos correspondinetes.</Text>
          </View>
        </View>
        <View style={styles.containerDos}>

          <TextInput style={styles.inputBox}
         underlineColorAndroid='rgba(0,0,0,0)'
         onChangeText={pesoAlto =>this.setState({pesoAlto})}
         keyboardType={'numeric'}
          placeholder="Peso alto"/>

          <TextInput style={styles.inputBox}
         underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={pesoMedio =>this.setState({pesoMedio})}
          keyboardType={'numeric'}
          placeholder="Peso medio"/>

          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'

            onChangeText={pesoBajo =>this.setState({pesoBajo})}
            keyboardType={'numeric'}
             placeholder="Peso bajo"/>

             <TouchableHighlight >
               <Text style={styles.buttonText}
                  onPress={this.saveForm.bind(this)}
                  >Siguiente</Text>
             </TouchableHighlight>
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
  wrapper: {
    backgroundColor: '#F6F6F6'
 },
 slide: {
   flex: 1,
   //backgroundColor: '#FFFFFF',
 alignItems: 'center',
//  justifyContent: 'center',

   borderWidth: 1,
   borderRadius: 9,
   borderColor: '#ddd',
   borderBottomWidth: 0,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: -1 },
   shadowOpacity: 4,
   shadowRadius: 9,
   elevation: 1,
   marginLeft:41 ,
   marginRight: 41,
   marginTop: 20,
   marginBottom: 67,

 },
  image: {
    width:103,
    height:19,
  //  alignItems: 'center',
    //justifyContent: 'center',
  //   borderRadius:9,
  },
  redText:{
    fontSize:16,
    color:'#A91414',
      textAlign:'center',
  },
  inputBox: {
    width:199,
    //backgroundColor:'#ffff',
    borderRadius:25,
    textAlign:'center',
    fontSize:19,
    color:'#606060',
    marginVertical:15,
    borderWidth:0.51,
    borderColor:'#606060',
    paddingVertical:5,
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

buttonSave:{
  justifyContent: 'center',
//  textAlign:'center',
  borderWidth:1,
  borderColor:'#A91414',
  paddingVertical:10,
},
  navigatorBar:{
   flexDirection:'row',
   paddingTop: 30,
    paddingBottom:10,
  },
  navigatorBottom:{
    flex:1,
    textAlign:'center',
  },
  navigatorTitle:{
    flex:3,
    fontSize:25,
    fontFamily:'Roboto Medium',
    color:'#606060',
  },
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerText: {
    flex: 2,
//  backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
    borderWidth:20,
    borderColor:'white'
  },
  containerDos: {
    flex: 2,
  //  backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
      marginVertical:30,
  },
  containerRed: {
    flex: 1,
  //  backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',

  },
  containerRedAbajo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  //  color:'#fff',
  },
  containerBlueDos: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  //  backgroundColor: '#fff',
    alignItems: 'center',
    //width: 320,
    //height: 60,
    //backgroundColor:'white',
    borderRadius: 10,
    shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
    margin: 40 ,
    padding: 10,
    borderWidth:4,
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
  textoRojo:{
      fontSize:19,
      color:'#A91414',
  },
});
