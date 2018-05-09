
import React from 'react';
import { Font } from 'expo';
import {  StyleSheet, Text, View ,Image,PixelRatio,TouchableHighlight  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants} from 'expo';
var BUTTON_TEXT_FONT  = 16;
var BUTTON_TEXT_WIDTH=190  ;


if (PixelRatio.get() <= 2) {
  BUTTON_TEXT_FONT = 30;
  BUTTON_TEXT_WIDTH = 400;
};
export default class explicacionPasoUno extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: { marginTop: Constants.statusBarHeight },
    };
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.expoArriba}>

          <Image style={styles.balanza} source={require('../../../assets/gifs/balanza.gif')} />
        </View>
        <View style={styles.expoAbajo}>
          <Image style={styles.letrasBalanza} source={require('../../../assets/gifs/letrasBalanza.gif')} />
          <TouchableHighlight>
            <Text style={styles.buttonText} onPress={() => navigate('PasoUno',{user:'PasoUno'})}>Ejecutar tarea</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  expoArriba: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', height: '50%', backgroundColor: 'white'
  },
  expoAbajo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', height: '50%', backgroundColor: '#e50000'
  },

  balanza: {
    width: '60%', height: '100%'
  },
  letrasBalanza: {
    width: '80%', height: '60%'
  },
  buttonText:{
fontSize: BUTTON_TEXT_FONT,
    backgroundColor:'#ffff',
    color:'#A51414',
    marginVertical:10,
    width:BUTTON_TEXT_WIDTH,
    borderRadius:25,
    textAlign:'center',
    paddingVertical:9,
    marginBottom:27,
  },

});
