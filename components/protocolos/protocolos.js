import React, {Component} from 'react'
import {  StyleSheet, Text, View ,Image, TextInput,StatusBar,TouchableOpacity,Dimensions,ScrollView ,Button} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants} from 'expo';
import Helpers from '../../lib/helpers.js';

const { width, height } = Dimensions.get('window')



export default class protocolos extends Component {


  //Del componente ScrollView
   state = {
     pesoPorcentaje:0,
        names: [
           {'name': 'Protocolo para realizar aforos','subName':'Creado por CIPAV', 'id': 1}
        ]
     };


       async componentWillMount(){
         try {
           let user = await firebase.auth().currentUser;
           this.setState({
             userId:user.uid
           })

           Helpers.getUserPorcentaje(this.state.userId,(pesoPorcentaje) =>{
             this.setState({pesoPorcentaje:pesoPorcentaje})
             console.log('Helpers_pesoAlto ' + this.state.pesoPorcentaje);
           }).then(() =>{console.log('then ' + state.pesoAlto)})
           console.log('AfueraDeHelpers ' + this.state.pesoPorcentaje);

         } catch (error) {
           console.log(error);
         }
       }



  render() {
    const { navigate } = this.props.navigation;
    return(

      <View style={styles.container}>

        <ScrollView>
              {
                 this.state.names.map((item,subItem, index) => (

               <TouchableOpacity key = {item.id}  style = {styles.item} onPress={() => navigate('Muestra',{user:'Muestra'})}>

                      <View  style = {styles.itemDos}>
                        <Text style={styles.textGrayB} >{item.name}</Text>
                        <Text style={styles.textGray}>{item.subName}</Text>
                      </View>
                     <View style = {styles.itemDos}>
                       <Text style={styles.textPorcentaje}>{this.state.pesoPorcentaje}%</Text>
                     </View>

                    </TouchableOpacity>

                 ))
              }
           </ScrollView>
          </View>

    )
  }
}


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF'
 },
 buttonText:{
   fontSize:20,
   //fontWeight:'500',
   backgroundColor:'#A51414',
   color:'#ffff',

   marginVertical:10,
   width:199,
   borderRadius:25,
   textAlign:'center',
   paddingVertical:9,
   marginBottom:27,
 },
 slide: {
   flex: 1,
   //backgroundColor: '#FFFFFF'
  alignItems: 'center',
   justifyContent: 'center',

   borderWidth: 1,
   borderRadius: 9,
   borderColor: '#ddd',
   borderBottomWidth: 0,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: -1 },
   shadowOpacity: 4,
   shadowRadius: 9,
   elevation: 1,
   marginLeft:41 ,
   marginRight: 41,
   marginTop: 20,
   marginBottom: 67,

 },

 item: {
   flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'flex-start',
         padding: 17,

         margin: 5,
        // borderColor: '#2a4944',
        // borderWidth: 1,
        // backgroundColor: '#d2f7f1'

   flex: 1,
   //backgroundColor: '#FFFFFF'
  //alignItems: 'center',
  // justifyContent: 'center',

   borderWidth: 1,
   borderRadius: 9,
   borderColor: '#ddd',
   borderBottomWidth: 0,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: -1 },
   shadowOpacity: 4,
   shadowRadius: 9,
   elevation: 1,
   //marginLeft:41 ,
   //marginRight: 41,
  // marginTop: 20,
   //marginBottom: 67,
 },
 itemDos: {
   flexDirection: 'column',
         justifyContent: 'space-between',
         alignItems: 'flex-start',
       },
 textPorcentaje: {
   fontSize:16,
         flexDirection: 'column',
               justifyContent: 'space-between',
               alignItems: 'flex-start',
               paddingTop:10,
             },
 containerText: {
   flex: 2,
   backgroundColor:'#FFFFFF',
   alignItems: 'center',
   justifyContent: 'center',
   //paddingVertical:10,
   borderWidth:30,
   borderColor:'#FFFFFF',
 },
 textGrayB:{
   color:"#000000",
  //  fontFamily:'roboto-medium',
   fontSize:21,
   marginBottom:5,
   textAlign: 'left'
 },
 textGray:{
   color:'#000000',
   //marginBottom:10,
   fontSize:15,
   textAlign: 'left'
 },
 container: {
   flex: 1,
    backgroundColor: '#FFFFFF'
 },
 imgBackground: {
   width,
   height,
   backgroundColor: 'transparent',
   position: 'absolute'
 },
 image: {
   width:276,
   height:276,
   alignItems: 'center',
   justifyContent: 'center',
    borderRadius:9,
 },
});
