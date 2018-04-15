import React from 'react';
import { StyleSheet, Text, View , AppRegistry ,Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants} from 'expo';

class Navbar extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
      headerStyle: { marginTop: Constants.statusBarHeight },
  });
  render() {
   const { params } = this.props.navigation.state;
    return (
      <View>
        <Text> Chat with {params.user}</Text>
      </View>
    );
  }
}

export default Navbar;
