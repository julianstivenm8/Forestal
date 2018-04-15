import React from 'react';
import {  StyleSheet, Text,TouchableHighlight, View , Navigator , Button } from 'react-native';
import { Font } from 'expo';
import * as firebase from 'firebase';
//import Icon from './icons/menu'
import Helpers from '../lib/helpers';
import Firebase from '../lib/firebase';
import { Constants} from 'expo';

export default class Index extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user}`,
      headerStyle: { marginTop: Constants.statusBarHeight },
  });
  constructor(props){
    super(props)
    this.state={
      alto:0,
      medio:0,
      bajo:0
    }

  }
  saveForm(){
    try{
      this.state.alto ? Helpers.setUserAlto(this.state.alto) :null
      this.state.medio ? Helpers.setUserMedio(this.state.medio) :null
      this.state.bajo ? Helpers.setUserBajo(this.state.bajo) :null
    }catch(error){
      console.log(error)
    }
  }

  adicionarAlto(){
    try{
    this.setState({alto:this.state.alto + 1});
  }catch(error){
    console.log(error)
  }
  }
  adicionarMedio(){
    try{
    this.setState({medio:this.state.medio + 1});
  }catch(error){
    console.log(error)
  }
  }
  adicionarBajo(){
    try{
    this.setState({bajo:this.state.bajo + 1});
  }catch(error){
    console.log(error)
  }
  }

  render() {
    return (
      <View style={[styles.container,border('green')]}>
      {/*  <View style={styles.navigatorBar}>
            <Text style={styles.navigatorBottom}>menu</Text>
            <Text style={styles.navigatorTitle}>
              Botón de oro
            </Text>

            <Text style={styles.navigatorBottom}>logiUno</Text>
            <Text style={styles.navigatorBottom}>logiDos</Text>
        </View>*/}
        <View style={[styles.shadow]}>
          <View style={styles.containerBlue}>
            <Text>paso 01</Text>
          </View>
          <View style={styles.containerText}>
            <Text>Observe en un metro cuadrado al azar el forraje que predomina, recorra toda la franja en zig-zag  y registre (presionando en los botones correspondientes) lo que encuentre en 25 puntos.</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.containerRed}>
            <Button
              onPress={this.adicionarAlto.bind(this)}
              title="Arbusto alto"
              color="#A91414"
              >
            {/*<Text style={styles.textoRojo}>Arbusto alto{this.state.alto}</Text>*/}
            </Button>
          </View>
          <View style={styles.containerRed}>
            <Button
              onPress={this.adicionarMedio.bind(this)}
              title="Arbusto medio"
              color="#A91414"
            />
            {/*<Text style={styles.textoRojo} >Arbusto medio{this.state.medio}</Text>*/}

          </View>

          <View style={styles.containerRed}>
            <Button
              onPress={this.adicionarBajo.bind(this)}
              title= 'Arbusto bajo'
              color="#A91414"
            />
            {/*<Text style={styles.textoRojo} >Arbusto bajo{this.state.bajo}</Text>*/}


          </View>
          <View style={styles.containerRedAbajo}>
            <TouchableHighlight
              style={styles.buttonSave}
              onPress={this.saveForm.bind(this)}
              >
              <Text>{this.state.medio+this.state.bajo+this.state.alto}/25</Text>

            </TouchableHighlight>
          </View>
          <View style={styles.containerRed}>
          </View>
        </View>
      </View>

    );
  }
}



const border=(color) =>{
  return{
    borderColor:color,
    borderWidth:7
  }
}

const styles = StyleSheet.create({

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
    fontSize:20,
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
  backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
    borderWidth:20,
    borderColor:'white'
  },
  containerDos: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

    backgroundColor: '#fff',
    alignItems: 'center',
    //width: 320,
    //height: 60,
    backgroundColor:'white',
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
  marginLeft: 8,
  marginRight: 8,
  marginTop: 20,
  },
  containerBlue: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoRojo:{
      fontSize:14,
      color:'#A91414',
  },
});

//export default Index
