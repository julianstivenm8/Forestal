import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { Constants} from 'expo';
import App from './components/medicion/muestraAltura'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up hola.js to start  on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
