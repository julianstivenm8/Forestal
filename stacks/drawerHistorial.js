import React from 'react';
import {DrawerNavigator} from 'react-navigation';
import Protocolos from '../components/protocolos/protocolos.js';
import Historial from '../components/protocolos/historial.js';
import InformacionBasica from '../components/informacionBasica/informacionBasica.js';
import InventarioAnimal from '../components/informacionBasica/inventarioAnimal.js';
import {Text,View,  StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
 const DrawerHistorial = DrawerNavigator({
   Historial: {screen: Historial },
   Protocolos: {screen: Protocolos},
   InformacionBasica: {screen: InformacionBasica},
   InventarioAnimal:{screen: InventarioAnimal},
}, {





      navigationOptions: ({navigation}) => ({
    headerLeft: <View style={styles.hamburguesa} >

      <MaterialCommunityIcons  onPress={() => {
        if(navigation.state.index === 0){
          navigation.navigate('DrawerOpen');
        } else {
          navigation.navigate('DrawerClose');
        }
      }} name="menu" size={32} color="#606060" />
      <Text style={styles.textGrayB}>Tareas del protocolo</Text>
    </View>
})
  })
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  icon:{
    paddingLeft: 40,
  },
  hamburguesa:{
    flex:1,
    flexDirection: 'row',
    alignItems:'center'
  },
  textGrayB:{
    color:"#000000",
    //  fontFamily:'roboto-medium',
    fontSize:21,
    textAlign: 'left'
  },
});

export default DrawerHistorial;
