import React, {Component} from 'react'
import {  StyleSheet, Text, View ,Image, TextInput,TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants} from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import Helpers from '../../lib/helpers.js'



export default class InformacionBasica extends Component {
  static navigationOptions = {
    drawerLabel: 'Configurar predio',
    drawerIcon: () => (
      <MaterialCommunityIcons  style={styles.icon}  name="settings" size={25} color="#606060" />

    )
  };


  constructor(props){
    super(props);
    this.state = {
      userId:'',
      nombrePredio:'',
      nombrePropietario:'',
      diasDescanso:0,
      areaPotrero:0,
      numeroFranjas:0,
      diasOcupacion:0
    };
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
    console.log(this.state.userId);
    console.log(this.state.nombrePredio);
    if(this.state.userId){
      try{
        this.state.nombrePredio ? Helpers.setUserNombre(this.state.userId,this.state.nombrePredio) :null
        this.state.nombrePropietario ? Helpers.setNombrePropietario(this.state.userId,this.state.nombrePropietario) :null
        this.state.diasDescanso ? Helpers.setDiasDescanso(this.state.userId,this.state.diasDescanso) :null
        this.state.areaPotrero ? Helpers.setAreaPotrero(this.state.userId,this.state.areaPotrero) :null
        this.state.numeroFranjas ? Helpers.setNumeroFranjas(this.state.userId,this.state.numeroFranjas) :null
        this.state.diasOcupacion ? Helpers.setDiasOcupacion(this.state.userId,this.state.diasOcupacion) :null
        this.props.navigation.navigate('Slide');
      }catch(error){
        console.log(error)
      }
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return(

      <View style={styles.container}>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          blurOnSubmit={true}
          onChangeText={nombrePredio =>this.setState({nombrePredio})}
          placeholder="Nombre del predio"/>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            blurOnSubmit={true}
            onChangeText={nombrePropietario =>this.setState({nombrePropietario})}
            placeholder="Nombre del propietario"/>
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              onChangeText={diasDescanso =>this.setState({diasDescanso})}
              keyboardType={'numeric'}
              placeholder="Días de descanso"/>
              <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                onChangeText={areaPotrero =>this.setState({areaPotrero})}
                keyboardType={'numeric'}
                placeholder="Área del potrero"/>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  onChangeText={numeroFranjas =>this.setState({numeroFranjas})}
                  keyboardType={'numeric'}
                  placeholder="Número de franjas"/>
                  <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={diasOcupacion =>this.setState({diasOcupacion})}
                    keyboardType={'numeric'}
                    placeholder="Días de ocupación"/>
                    <TouchableHighlight >
                      <Text style={styles.buttonText}
                        onPress={this.saveForm.bind(this)}
                        >Siguiente</Text>
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
