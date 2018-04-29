import React, {Component} from 'react'
import {  StyleSheet, Text, View ,Image, TextInput,TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants} from 'expo';
import * as firebase from 'firebase';



export default class registro extends Component {

  constructor(props){
    super(props);
    this.state = {email:'', password:'', error:'', loading:false};
  }

  static navigationOptions = {
    header : null,
    headerStyle: { marginTop: Constants.statusBarHeight },
  };

singUpGoogle(){
var id_token = googleUser.getAuthResponse().id_token;
console.log(id_token);
}

  onSignUpPress(){
    this.setState({error:'', loading:true});

    const {email, password} =this.state;
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
      this.setState({error:'', loading:false})
      this.props.navigation.navigate('Slide');
    })
    .catch(()=>{
      this.setState({error:'Llena todos los espacios',loading:false});
    })
  }
  renderButtonOrLoading(){
    if(this.state.loading){
      return <Text>Cargando</Text>
    }
    return <View>
      <TouchableHighlight >
        <Text style={styles.buttonText} onPress={this.onSignUpPress.bind(this)} >REGISTRARSE</Text>
      </TouchableHighlight>
    </View>
  }
  renderButtonOrLoadingGoogle(){

    return <View>
      <TouchableHighlight>
        <Text style={styles.buttonText}   onPress={this.singUpGoogle.bind(this)} >INGRESAR CON GOOGLE</Text>
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
        {this.renderButtonOrLoadingGoogle()}
          <TextInput style={styles.inputBox}
         underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType={'email-address'}
          blurOnSubmit={true}
            onChangeText={email =>this.setState({email})}
          placeholder="Correo electrónico"/>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={password =>this.setState({password})}
            secureTextEntry= {true}
             placeholder="Contraseña"/>
             <TextInput style={styles.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'
               onChangeText={password =>this.setState({password})}
               secureTextEntry= {true}
                placeholder="Repita su contraseña"/>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='rgba(0,0,0,0)'
                   placeholder="Fecha de nacimiento"/>
                   <TextInput style={styles.inputBox}
                     underlineColorAndroid='rgba(0,0,0,0)'
                      placeholder="Sexo"/>
                      <Text>{this.state.error}</Text>
                      {this.renderButtonOrLoading()}

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
    marginVertical:11,
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
  //  fontSize:10,
    fontSize:15,
  },
  buttonText:{
  //vc    fontSize:15,
    fontSize:20,
    //fontWeight:'500',
    backgroundColor:'#A51414',
    color:'#ffff',

    marginVertical:10,
    width:199,
    borderRadius:25,
    textAlign:'center',
    paddingVertical:9,
  },
});
