import React, {Component} from 'react'
import {  StyleSheet, Text, View ,Image, TextInput,TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants} from 'expo';
import * as firebase from 'firebase';


firebase.initializeApp({
  apiKey: "AIzaSyAIIClJYnmvo5Ja0nbC9wr_0r9W3WNXXQ4",
    authDomain: "proyectosilvopastoril-5e2c2.firebaseapp.com",
    databaseURL: "https://proyectosilvopastoril-5e2c2.firebaseio.com",
    projectId: "proyectosilvopastoril-5e2c2",
    storageBucket: "proyectosilvopastoril-5e2c2.appspot.com",
    messagingSenderId: "711046195494"
}
);

export default class login extends Component {
  static navigationOptions = {
    header : null,
      headerStyle: { marginTop: Constants.statusBarHeight },
  };
  constructor(props){
    super(props);
    this.state = {email:'', password:'', error:'', loading:false};
  }
  onLoginPress(){
    this.setState({error:'', loading:true});

    const {email, password} =this.state;
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
      this.setState({error:'', loading:false})
      this.props.navigation.navigate('Slide');
    })
    .catch(()=>{
      this.setState({error:'No pudimos encontrar tu cuenta',loading:false});
    })
  }
  /*
  onSignUpPress(){
    this.setState({error:'', loading:true});

    const {email, password} =this.state;
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
      this.setState({error:'', loading:false})
      this.props.navigation.navigate('Slide');
    })
    .catch(()=>{
      this.setState({error:'No pudimos encontrar tu cuenta',loading:false});
    })
  }*/

  renderButtonOrLoading(){
    if(this.state.loading){
      return <Text>Cargando</Text>
    }
    return <View>
      <TouchableHighlight >
        <Text style={styles.buttonText} onPress={this.onLoginPress.bind(this)} >INGRESAR</Text>
      </TouchableHighlight>
    </View>
  }
  render() {
    const { navigate } = this.props.navigation;
    return(

      <View style={styles.container}>
        <View style={styles.logoText}>
            <Image style={{width:130,height:22}}
            source={require('../../assets/image/logoUno.png')}/>
        </View>
          <TextInput style={styles.inputBox}
         underlineColorAndroid='rgba(0,0,0,0)'
         keyboardType={'email-address'}
         blurOnSubmit={true}
         autoCorrect={true}
      //defaultValue={'julian@hot.com'}
         onChangeText={email =>this.setState({email})}
          placeholder="Escribe tu correo"/>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={password =>this.setState({password})}
            secureTextEntry= {true}
//  defaultValue={'123456'}
             placeholder="Contraseña"/>
             <Text>{this.state.error}</Text>
             {this.renderButtonOrLoading()}
       <TouchableHighlight >
         <Text style={styles.textDown} >¿No tienes una cuenta?</Text>
       </TouchableHighlight>
       <TouchableHighlight >
         <Text style={styles.textDown} onPress={() => navigate('Registro',{user:'Registro'})} >Solicita una a tu asesor de proyecto.</Text>
       </TouchableHighlight>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  inputBox: {
    width:199,
    backgroundColor:'#ffff',
    borderRadius:25,
    textAlign:'center',
    //fontSize:14,
    fontSize:18,
    color:'#606060',
    marginVertical:10,
    borderWidth:0.51,
    borderColor:'#606060',
    paddingVertical:5,
  },
  container:{
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  logoText:{
    marginVertical:25,
  },
  textDown:{
    marginVertical:0,
    color:'#A91414',
    //fontSize:10,
    fontSize:15,
  },
  buttonText:{
    //fontSize:15,
    fontSize:20,
    backgroundColor:'#A51414',
    color:'#ffff',
    marginVertical:10,
    width:199,
    borderRadius:25,
    textAlign:'center',
    paddingVertical:9,
  },
});
