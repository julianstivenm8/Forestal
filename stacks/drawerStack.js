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

const DrawerNavigation = StackNavigator({
    DrawerStack: {screen: DrawerScreen}
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
             borderWidth: 0,
             borderBottomColor: 'white'
        },
        title: 'Home',
        headerTintColor: 'white',
        headerRight:<View style={styles.wrapper}>
          <MaterialCommunityIcons  style={styles.icon}  onPress={() => navigation.navigate('Chat',{user:'madrid'})} name="message-text" size={32} color="#606060" />
        <MaterialCommunityIcons    onPress={() => navigation.navigate('Chat',{user:'madrid'})} name="calendar-range" size={32} color="#606060" />
      </View>,
        headerLeft: <View>
             <MaterialCommunityIcons  onPress={() => {
                 if(navigation.state.index === 0){
                     navigation.navigate('DrawerOpen');
                 } else {
                     navigation.navigate('DrawerClose');
                 }
             }} name="menu" size={32} color="#606060" />
        </View>
    })
})
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
 },
 icon:{
   paddingLeft: 40,
 }
 });
export default DrawerNavigation;
