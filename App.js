import React from 'react';
import { StyleSheet, Text, View ,TouchableHighlight, AppRegistry ,Button,Image} from 'react-native';
import { Font } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigator ,DrawerNavigator} from 'react-navigation';
import * as firebase from 'firebase';
import { Constants} from 'expo';

import Navbar from './components/Navbar.js';
import Index from './components/Index.js';
import Login from './components/login/login.js';
import Registro from './components/registro/registro.js';
import Slide from './components/slide/slide.js';
import Protocolos from './components/protocolos/protocolos.js';
import Muestra from './components/protocolos/muestra.js';
import PasoUno from './components/pasos/pasoUno.js';
import PasoDos from './components/pasos/pasoDos.js';
import PasoTres from './components/pasos/pasoTres.js';
import Revision from './components/pasos/revision.js';
import DrawerStack from './stacks/drawerStack.js';
import HerramientaAforos from './components/herramientaAforos/herramientaAforos.js';

class HomeScreen extends React.Component  {

  static navigationOptions = {
    tabBarLabel: 'Home',
    header : null,
      headerStyle: { marginTop: Constants.statusBarHeight },
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.

  };



  render() {

      const { navigate } = this.props.navigation;

    return (

      <View style={  styles.containerDos}>


<View style={ {flex:1}, styles.container}>
        <View style={styles.logoText}>
        <Image style={{width:130,height:22}}
        source={require('./assets/image/logoUno.png')}/>
            </View>
            </View>

        <View style={{flex:3},styles.container}>

          <TouchableHighlight>
            <Text style={styles.buttonText}
              onPress={() => navigate('Login',{user:'Agregar productor'})}>
              Investigador</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={styles.buttonText}
              onPress={() => navigate('Login',{user:'Botón de oro'})}>
              Productor</Text>
          </TouchableHighlight>
        </View>


          {/*<View style={  styles.container}>
          <Button
            onPress={() => navigate('Login',{user:'Agregar productor'})}
            title="Investigador"
          />
        </View>*/}
          { /*  <View style={  styles.container}>
        <Button
            onPress={() => navigate('Index',{user:'Botón de oro'})}
            title="Productor"
          />
        </View>*/}
      </View>
    );
  }
}


///////////////////////////////////////////////////////////////////////////////////////////   Navegador   //////////////////////////////////////////////////////////////
export const SimpleApp = StackNavigator({
  PasoUno: {screen:PasoUno},
  PasoDos: {screen:PasoDos},
  PasoTres:{screen:PasoTres}
});

export const Navigator = StackNavigator({
    drawerStack: {screen: DrawerStack},
    Home: { screen: HomeScreen},
    Chat: { screen: Navbar },
    Index: { screen: Index },
    Login: { screen: Login },
    Registro: { screen: Registro },
    Slide: { screen: Slide },
    Protocolos: { screen: Protocolos },
    Muestra: {screen:Muestra},
    PasoUno: {screen:PasoUno},
    PasoDos: {screen:PasoDos},
    PasoTres:{screen:PasoTres},
    Revision:{screen:Revision},
    HerramientaAforos:{screen:HerramientaAforos}
}, {
   //headerMode: 'none',
    initialRouteName: 'Slide'
})


// la clase principal
export default class App extends React.Component {

  render() {
return <Navigator />;
//return <SimpleApp />;
  }
}
/*const stile=({
  containerDos: {
  width: 320;
    height: 60;
  }
})*/
const styles = StyleSheet.create({
  icon: {
   width: 24,
   height: 24,
 },
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    //backgroundColor: '#fff',
    alignItems: 'center',
  //  width: 320,
  //  height: 60,
  //  backgroundColor:'white',
  //  borderRadius: 6,
//  boxshadow: 1 2.97 12 'darkgray',
  //  shadowColor: 'red',
  //  shadowRadius: 50,
  //  margin: 40 ,
    padding: 30,
  },

  containerDos:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoText:{
    marginVertical:0,
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
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
