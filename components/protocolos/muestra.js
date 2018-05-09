import React, {Component} from 'react'
import {  StyleSheet, Text, View ,Image, TextInput,StatusBar,TouchableOpacity,Dimensions,ScrollView ,TouchableHighlight,ProgressBarAndroid  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants} from 'expo';
//La  carpeta fue copiada directamente al node_modules, porque no me cargaba en el npm
import * as Progress from 'react-native-progress-master';
import Helpers from '../../lib/helpers.js';
//import * as json2csv from 'json2csv'
//import RNFetchBlob from 'react-native-fetch-blob'

const { width, height } = Dimensions.get('window')

export default class Muestra extends Component {
  static navigationOptions = {
      drawerLabel: 'Muestra',
      drawerIcon: () => (
        <MaterialCommunityIcons  style={styles.icon}  name="leaf" size={25} color="#606060" />

      )
    };
  constructor(){
    super()
    this.ExportJSON=this.ExportJSON.bind(this)
    this.findExtension=this.findExtension.bind(this)
  }
  //Del componente ScrollView
  state = {
    pesoBajo:0,
    pesoMedio:0,
    pesoPorcentaje:0,
    names: [
      {'name': 'Muestra de Botón de oro','porcentaje':100, 'id': 1},
      {'name': 'Muestra de Sinaí','porcentaje':100, 'id': 2},
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

      Helpers.getUserMedio(this.state.userId,(pesoMedio) =>{
        this.setState(previousState => {
          return { pesoMedio:parseInt(pesoMedio)}});
        })
        Helpers.getUserBajo(this.state.userId,(pesoBajo) =>{
          this.setState(previousState => {
            return { pesoBajo:pesoBajo}});
          })

        } catch (error) {
          console.log(error);
        }
      }





      ExportJSON(){

        //this is your array with data
        var arr=[];
        arr.push({ 'Name':'Andrei Ignat','WebSite':'http://msprogrammer.serviciipeweb.ro/','CV':'http://serviciipeweb.ro/iafblog/content/binary/cv.doc'});
        arr.push({ 'Name':'Your name','WebSite':'http://yoursite','CV':'cv.doc' });
        //we will stringify

        var data = JSON.stringify(arr);

        var id=5;//5=xlsx, 4=docx, 3 = pdf
        var urlData='http://exporter.azurewebsites.net/api/export/ExportFromJSON/' + id;

        //and export
        this.Export(urlData, id, data);
        return false;


      }
      //extension of the file

      //step 1: POST data, obtain unique id for the export document
      //step 2: obtain file from the unique id
      Export(urlExport,id, data) {
        var ext = this.findExtension(id);


        //step 1 - post data
        fetch({
          type: "POST",
          url: urlExport,
          body: JSON.stringify({ 'data': data }),

          datatype: "JSON",
          contentType: "application/json; charset=utf-8"
        })
        .then(function(result) {
          //step 2 - obtain file
          var urlDownload = `http://exporter.azurewebsites.net/api/export/GetFile/${result}
          ?fileName=andrei&extension=${ext}` ;


          console.log(result.json());

          window.location=urlDownload;

          return urlDownload
        }).then(url =>{



          console.log(url);

        })
        .catch(function(f) {
          alert("error:" + f.responseText);
        });





      }


      texto(){
        return
        <View>
          <Text style={styles.buttonText} onPress={this.ExportJSON}>Descargar excel</Text>
        </View>
      }

      findExtension(id) {
        switch (id) {
          case 5:
          return "xlsx";
          case 4:
          return "docx";
          case 3:
          return "pdf";
          default:
          return "notKnown" + id;
        }}

        render() {


          const { navigate } = this.props.navigation;
          return(
            <View style={styles.container}>
              <StatusBar  hidden = {false} />

              <ScrollView >
<View  style = {styles.scrollView}>
                {
                  this.state.names.map((item,subItem, index) => (
                    <TouchableOpacity key = {item.id}  style = {styles.item} onPress={() => navigate('ExplicacionPasoUno',{user:'ExplicacionPasoUno'})}>
                      <View  style = {styles.itemTres}>
                        <View  style = {styles.itemDos}>
                          <Text style={styles.textGrayB} >{item.name}</Text>
                        </View>
                        <View style = {styles.itemEnd}>
                          <Text style={styles.textPorcentaje}>{this.state.pesoPorcentaje}%</Text>
                        </View>
                      </View>
                      <View  style = {styles.progress}>
                        <Progress.Bar progress={this.state.pesoPorcentaje/100} width={280} height={5} unfilledColor={'#EAEAEA'} color={'#D8940F'} borderWidth={0.2} borderColor={'#EAEAEA'} borderRadius={2}  />
                      </View>
                    </TouchableOpacity>
                  ))
                }

                <TouchableHighlight>
                  <Text style={styles.buttonText} >Enviar protocolo</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                  <Text style={styles.buttonText} >Ver resultantes</Text>
                </TouchableHighlight>
                  </View>
              </ScrollView>

            </View>

          )
        }
      }
      const styles = StyleSheet.create({
        wrapper: {
          backgroundColor: '#FFFFFF'
        },
        progress:{
          flex:1,
          alignItems:'center',
          marginLeft:0 ,
        },
        info:{
          marginLeft:0 ,
        },
        buttonText:{
          fontSize:20,
          backgroundColor:'#d6aaaa',
          color:'#ffff',
          padding: 17,
          width:'90%',
          marginTop:17,
          borderRadius:6,
          textAlign:'center',
          paddingVertical:9,
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
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 17,
          margin: 20,
          flex: 1,
          borderWidth: 1,
          borderRadius: 9,
          borderColor: '#ddd',
          borderBottomWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -1 },
          shadowOpacity: 4,
          shadowRadius: 9,
          elevation: 1,
          marginBottom: 0,
        },
        itemWhite: {
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 17,
          margin: 20,
          flex: 1,
          borderWidth: 1,
          borderRadius: 9,
          borderColor: '#efefef',
          borderBottomWidth: 0,
          shadowColor: '#efefef',
          shadowOffset: { width: 0, height: -1 },
          shadowOpacity: 4,
          shadowRadius: 9,
          elevation: 1,
          marginBottom: 0,
        },
        itemDos: {
          paddingLeft:17,
          paddingTop:10,
        },
        itemTitle: {
          paddingLeft:17,
          paddingTop:5,
          marginTop:10,
          // borderTopColor: '#bbb',
          // borderTopWidth: 1,
          display:'flex',
          flexDirection: 'row',
          alignItems: 'center',

          // linereight: 40,
        },
        itemTres: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        itemEnd: {

        },
        textPorcentaje: {
          fontSize:16,
          // paddingTop:1,
        },
        containerText: {
          flex: 2,
          backgroundColor:'#FFFFFF',
          //paddingVertical:10,
          borderWidth:30,
          borderColor:'#FFFFFF',
        },
        textGrayB:{
          color:"#606060",
          fontSize:21,
          marginBottom:5,
        },
        textGrayBWhite:{
          color:"#d3d3d3",
          fontSize:21,
          marginBottom:5,
        },
        textGraySub:{
          color:"#606060",
          //  fontFamily:'roboto-medium',
          fontSize:16,
          marginBottom:5,
          //   textAlign: 'left'
        },
        textGray:{
          color:'#606060',
          //marginBottom:10,
          fontSize:15,
          textAlign: 'left'
        },
        container: {
          backgroundColor: '#FFFFFF',
          height:'100%'
        },
        imgBackground: {
          width,
          height,
          backgroundColor: 'transparent',
          position: 'absolute'
        },
        scrool: {
          alignItems: 'center',
          marginTop:33

        },
        scrollView:{
          flex:1,
          alignItems:'center'
        }
      });
