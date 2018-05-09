import React from 'react';
import {  StyleSheet, Text,TouchableHighlight, View  , Button ,TextInput,Image} from 'react-native';
import { Font } from 'expo';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Helpers from '../../lib/helpers.js';
import { Constants} from 'expo';

export default class PasoDos extends React.Component {
  static navigationOptions = ({ navigation }) => {
       return {
          headerStyle: { marginTop: Constants.statusBarHeight },
       };
   };
 /*static navigationOptions = ({ navigation }) => {
    //  const {state, setParams} = navigation;
    //  const isInfo = state.params.mode === 'info';
    //  const {user} = state.params;

    const { navigate } = navigation;
      return {
        headerStyle: { marginTop: Constants.statusBarHeight },
        headerLeft: <MaterialCommunityIcons name="menu" size={32} color="#606060" />,
        headerRight:(
        <MaterialCommunityIcons    onPress={() => navigate('Chat',{user:'madrid'})} name="calendar-range" size={32} color="#606060" />
        ),
      };
  };*/
  constructor(props){
    var database = firebase.database();
    super(props)
    this.state={
      userId:'',
      alto:0,
      medio:0,
      bajo:0,
      suma:0,
      activar:true,
      pesoPorcentaje:100
    }
  }
  async componentWillMount(){
    try {
      let user = await firebase.auth().currentUser;
      this.setState({
        userId:user.uid
      })
    } catch (error) {
      console.log(error);
    }
    if (this.state.activar) {

    }
  }
  saveForm(){
    if(this.state.userId){
    try{
      this.state.alto ? Helpers.setUserAltoZ(this.state.userId,this.state.alto) :null
      this.state.medio ? Helpers.setUserMedioZ(this.state.userId,this.state.medio) :null
      this.state.bajo ? Helpers.setUserBajoZ(this.state.userId,this.state.bajo) :null
      this.state.pesoPorcentaje ? Helpers.setUserPorcentaje(this.state.userId,this.state.pesoPorcentaje) :null
      this.props.navigation.navigate('PasoTres');
    }catch(error){
      console.log(error)
    }
   }
  }

  adicionarAlto(){
    try{
        if (this.state.activar) {
          this.setState({alto:this.state.alto + 1});
          this.setState({suma:this.state.suma + 1});
  }
  }catch(error){
    console.log(error)
  }
  }
  restarAlto(){
    try{
        if ( this.state.alto >=1) {
    this.setState({alto:this.state.alto - 1});
    this.setState({suma:this.state.suma - 1});
    this.setState({activar:true});
  }
  }catch(error){
    console.log(error)
  }
  }
  adicionarMedio(){
    try{
        if (this.state.activar) {
    this.setState({medio:this.state.medio + 1});
    this.setState({suma:this.state.suma + 1});
  }
  }catch(error){
    console.log(error)
  }
  }
  restarMedio(){
    try{
        if (this.state.medio >=1) {
    this.setState({medio:this.state.medio - 1});
    this.setState({suma:this.state.suma - 1});
      this.setState({activar:true});
  }
  }catch(error){
    console.log(error)
  }
  }
  adicionarBajo(){
    try{
        if (this.state.activar ) {
    this.setState({bajo:this.state.bajo + 1});
    this.setState({suma:this.state.suma + 1});
  }
  }catch(error){
    console.log(error)
  }
  }
  restarBajo(){
    try{
        if (this.state.bajo >=1) {
    this.setState({bajo:this.state.bajo - 1});
    this.setState({suma:this.state.suma - 1});
      this.setState({activar:true});
  }
  }catch(error){
    console.log(error)
  }
  }
  suma(){

      if (this.state.suma>=25) {
    this.setState({suma:24});
    this.setState({activar:false});
 }
  }
  siguiente(){
    if(this.state.activar==false){
      return <TouchableHighlight>
        <Text style={styles.buttonText}
            onPress={this.saveForm.bind(this)}>
          Siguiente</Text>
      </TouchableHighlight>
    }
    return <TouchableHighlight>
      <Text style={styles.buttonText}>
        {this.state.suma}/25</Text>
    </TouchableHighlight>
  }


  render() {
      const { navigate } = this.props.navigation;
    /* this.suma.bind(this);
      this.setState({suma:this.state.medio+this.state.bajo+this.state.alto});
      console.log(this.state.suma);*/
    return (
      <View style={styles.container}>
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
            <Image
              style={styles.image}
              source={require('../../assets/image/paso02.png')}
              resizeMode='cover'
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.redText}>Recorra toda la franja en

                <Text style={styles.redTextBold}> zig-zag  y registre </Text>(presionando en los botones correspondientes) lo que encuentre en 25 puntos.</Text>
          </View>
        </View>
        <View style={styles.containerDos}>

            <View style={styles.containerTres}>
              <TouchableHighlight>
                <Text style={styles.inputBoxNumber}>{this.state.alto}</Text>
              </TouchableHighlight>
              <TouchableHighlight>
                <Text  style={styles.inputBox}>Arbusto alto</Text>
              </TouchableHighlight>
              <TouchableHighlight>
                <Text onPress={this.restarAlto.bind(this)} style={styles.inputBoxDos}>-</Text>
              </TouchableHighlight>
              <TouchableHighlight>
                <Text onPress={this.adicionarAlto.bind(this)} style={styles.inputBoxDos}>+</Text>
              </TouchableHighlight>
            </View>

          <View style={styles.containerTres}>
                <TouchableHighlight>
                  <Text style={styles.inputBoxNumber}>{this.state.medio}</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                  <Text  style={styles.inputBox}>Arbusto medio</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                  <Text onPress={this.restarMedio.bind(this)} style={styles.inputBoxDos}>-</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                  <Text onPress={this.adicionarMedio.bind(this)} style={styles.inputBoxDos}>+</Text>
                </TouchableHighlight>
              </View>

             <View style={styles.containerTres}>
               <TouchableHighlight>
                 <Text style={styles.inputBoxNumber}>{this.state.bajo}</Text>
               </TouchableHighlight>
               <TouchableHighlight underlayColor={'blue'} activeOpacity={10}>
                 <Text style={styles.inputBox}>Arbusto bajo</Text>
               </TouchableHighlight>
               <TouchableHighlight>
                 <Text onPress={this.restarBajo.bind(this)} style={styles.inputBoxDos}>-</Text>
               </TouchableHighlight>
               <TouchableHighlight>
                 <Text onPress={this.adicionarBajo.bind(this)} style={styles.inputBoxDos}>+</Text>
               </TouchableHighlight>
             </View>
{this.suma()}
             {this.siguiente()}
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
  //  alignItems: 'center',
    //justifyContent: 'center',
  //   borderRadius:9,
  },
  redText:{
    fontSize:16,
    color:'#A91414',
      textAlign:'center',
  },
  redTextBold:{
    fontSize:16,
    fontWeight: 'bold',
    color:'#A91414',
      textAlign:'center',
  },
  inputBox: {
    width:120,
  //  backgroundColor:'#ffff',
    borderRadius:10,
    textAlign:'center',
    fontSize:17,
    color:'#A51414',
    marginVertical:6,
    marginHorizontal:5,
    borderWidth:1.286,
  //  borderColor:'#A51414',
    borderColor:'#A51414',
    paddingVertical:15,
  },
  inputBoxNumber: {
    width:50,
    //backgroundColor:'#ffff',
    borderRadius:10,
    textAlign:'center',
    fontSize:19,
    color:'#A51414',
    marginVertical:6,
    marginHorizontal:5,
    borderWidth:1.286,
    borderColor:'#A51414',
    paddingVertical:15,
  },
  inputBoxDos: {
    width:42,
    backgroundColor:'#A51414',
    borderRadius:10,
    textAlign:'center',
    fontSize:20,
    color:'#ffff',
    marginVertical:6,
    marginHorizontal:10,
    borderWidth:1.286,
    borderColor:'#A51414',
   paddingVertical:15,
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
 backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
    borderWidth:20,
   borderColor:'white'
  },
  containerDos: {
    flex: 2,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
      marginVertical:30,
  },
  containerTres: {
    flexDirection: 'row',
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //  marginVertical:30,
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
  /*  //backgroundColor: '#fff',
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
    borderWidth:4,*/
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
