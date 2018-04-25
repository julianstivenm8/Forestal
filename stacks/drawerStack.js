import {
  StackNavigator
} from 'react-navigation';
import {
  TouchableHighlight,
  Text,
  View,
  StyleSheet
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Constants} from 'expo';
import DrawerScreen from './drawerScreen';
import DrawerMuestra from './drawerMuestra';
import DrawerHistorial from './drawerHistorial';
import DrawerInformacionBasica from './drawerInformacionBasica';

const DrawerNavigation = StackNavigator({
  DrawerStack: {screen: DrawerScreen },
  DrawerMuestra: {screen: DrawerMuestra},
  DrawerHistorial: {screen: DrawerHistorial},
  DrawerInformacionBasica: {screen: DrawerInformacionBasica},
}, {
  headerMode: 'none',
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      marginTop: Constants.statusBarHeight,
      backgroundColor: 'white',
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 20,
      paddingRight: 20,
    },
    title: 'Home',
    headerTitle: 'Home',
    headerTintColor: 'white',
    headerRight:<View style={styles.wrapper}>
      <MaterialCommunityIcons  style={styles.icon}  onPress={() => navigation.navigate('Chat',{user:'madrid'})} name="message-text" size={32} color="#606060" />
      <MaterialCommunityIcons    onPress={() => navigation.navigate('Chat',{user:'madrid'})} name="calendar-range" size={32} color="#606060" />
    </View>,
    headerLeft: <View style={styles.hamburguesa} >

      <MaterialCommunityIcons  onPress={() => {
        if(navigation.state.index === 0){
          navigation.navigate('DrawerOpen');
        } else {
          navigation.navigate('DrawerClose');
        }
      }} name="menu" size={32} color="#606060" />
      <Text style={styles.textGrayB}>Protocolos activos</Text>
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
export default DrawerNavigation;
