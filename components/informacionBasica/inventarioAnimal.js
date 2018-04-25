import React, {Component} from 'react'
import {  StyleSheet, Text, View ,Image, TextInput,TouchableHighlight,ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants} from 'expo';
import * as firebase from 'firebase';

export default class InventarioAnimal extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return(
 <ScrollView>
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          blurOnSubmit={true}
          keyboardType={'numeric'}
          placeholder="Machos de 0 a 1 año"/>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            blurOnSubmit={true}
            keyboardType={'numeric'}
            placeholder="Machos de levante"/>
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              keyboardType={'numeric'}
              placeholder="Toretes mayores de 2 años"/>
              <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Toros mayores de 3 años"/>
                <TextInput style={styles.inputBox}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  keyboardType={'numeric'}
                  placeholder="Hembras de 0 a 1 año"/>
                  <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    keyboardType={'numeric'}
                    placeholder="Hembras de levante"/>
                      <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        keyboardType={'numeric'}
                        placeholder="Hembras de vientre"/>
                          <TextInput style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            keyboardType={'numeric'}
                            placeholder="Vacas escoteras"/>
                              <TextInput style={styles.inputBox}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                keyboardType={'numeric'}
                                placeholder="Vacas paridas"/>
                                <TouchableHighlight >
                                  <Text style={styles.buttonText}>Seguir con el tutorial</Text>
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
