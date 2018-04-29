import React, {Component} from 'react'
import {  StyleSheet, Text, View ,Image, TextInput,TouchableHighlight,ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants} from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import Helpers from '../../lib/helpers.js'

export default class InventarioAnimal extends Component {
  static navigationOptions = {
    drawerLabel: 'Configurar Inventario animal',
    drawerIcon: () => (
      <MaterialCommunityIcons  style={styles.icon}  name="cow" size={25} color="#606060" />

    )
  };
  constructor(props){
    super(props);
    this.state = {
      userId:'',
      machos0a1:0,
      machosLevante:0,
      toretesMayores2Anos:0,
      toretesMayores3Anos:0,
      hembras0a1Años:0,
      hembrasLevante:0,
      hembrasVientre:0,
      vacasEscoteras:0,
      vacasParidas:0
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
        this.state.machos0a1 ? Helpers.setMachos0a1(this.state.userId,this.state.machos0a1) :null
        this.state.machosLevante ? Helpers.setMachosLevante(this.state.userId,this.state.machosLevante) :null
        this.state.toretesMayores2Anos ? Helpers.setToretesMayores2Anos(this.state.userId,this.state.toretesMayores2Anos) :null
        this.state.toretesMayores3Anos ? Helpers.setToretesMayores3Anos(this.state.userId,this.state.toretesMayores3Anos) :null
        this.state.hembras0a1Años ? Helpers.setHembras0a1Años(this.state.userId,this.state.hembras0a1Años) :null
        this.state.hembrasLevante ? Helpers.setHembrasLevante(this.state.userId,this.state.hembrasLevante) :null
        this.state.hembrasVientre ? Helpers.setHembrasVientre(this.state.userId,this.state.hembrasVientre) :null
        this.state.vacasEscoteras ? Helpers.setVacasEscoteras(this.state.userId,this.state.vacasEscoteras) :null
        this.state.vacasParidas ? Helpers.setvacasParidas(this.state.userId,this.state.vacasParidas) :null
        this.props.navigation.navigate('Protocolo');
      }catch(error){
        console.log(error)
      }
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <ScrollView>
        <View style={styles.container}>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            blurOnSubmit={true}
            onChangeText={machos0a1 =>this.setState({machos0a1})}
            keyboardType={'numeric'}
            placeholder="Machos de 0 a 1 año"/>
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              blurOnSubmit={true}
              onChangeText={machosLevante =>this.setState({machosLevante})}
              keyboardType={'numeric'}
              placeholder="Machos de levante"/>
              <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                onChangeText={toretesMayores2Anos =>this.setState({toretesMayores2Anos})}
                keyboardType={'numeric'}
                placeholder="Toretes mayores de 2 años"/>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  onChangeText={toretesMayores3Anos =>this.setState({toretesMayores3Anos})}
                  keyboardType={'numeric'}
                  placeholder="Toros mayores de 3 años"/>
                  <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={hembras0a1Años =>this.setState({hembras0a1Años})}
                    keyboardType={'numeric'}
                    placeholder="Hembras de 0 a 1 año"/>
                    <TextInput style={styles.inputBox}
                      underlineColorAndroid='rgba(0,0,0,0)'
                      onChangeText={hembrasLevante =>this.setState({hembrasLevante})}
                      keyboardType={'numeric'}
                      placeholder="Hembras de levante"/>
                      <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText={hembrasVientre =>this.setState({hembrasVientre})}
                        keyboardType={'numeric'}
                        placeholder="Hembras de vientre"/>
                        <TextInput style={styles.inputBox}
                          underlineColorAndroid='rgba(0,0,0,0)'
                          onChangeText={vacasEscoteras =>this.setState({vacasEscoteras})}
                          keyboardType={'numeric'}
                          placeholder="Vacas escoteras"/>
                          <TextInput style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            onChangeText={vacasParidas =>this.setState({vacasParidas})}
                            keyboardType={'numeric'}
                            placeholder="Vacas paridas"/>
                            <TouchableHighlight >
                              <Text style={styles.buttonText}
                                onPress={this.saveForm.bind(this)}>
                                Seguir con el tutorial
                              </Text>
                            </TouchableHighlight>
                          </View>
                        </ScrollView>


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
