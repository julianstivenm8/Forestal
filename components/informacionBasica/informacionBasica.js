import React, {Component} from 'react'
import {  StyleSheet, Text, View ,Image, TextInput,TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants} from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as firebase from 'firebase';



export default class InformacionBasica extends Component {
  static navigationOptions = {
      drawerLabel: 'Configurar predio',
      drawerIcon: () => (
        <MaterialCommunityIcons  style={styles.icon}  name="settings" size={25} color="#606060" />

      )
    };
  constructor(props){
    super(props);
    this.state = {email:'', password:'', error:'', loading:false};
  }


  render() {
    const { navigate } = this.props.navigation;
    return(

      <View style={styles.container}>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          blurOnSubmit={true}
          onChangeText={email =>this.setState({email})}
          placeholder="Nombre del predio"/>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            blurOnSubmit={true}
            onChangeText={email =>this.setState({email})}
            placeholder="Nombre del propietario"/>
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              keyboardType={'numeric'}
              placeholder="Días de descanso"/>
              <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Área del potrero"/>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  keyboardType={'numeric'}
                  placeholder="Número de franjas"/>
                  <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    keyboardType={'numeric'}
                    placeholder="Días de ocupación"/>
                    <TouchableHighlight >
                      <Text style={styles.buttonText}>MODIFICAR</Text>
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
