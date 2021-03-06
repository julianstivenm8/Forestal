import React, {Component} from 'react'
import {  StyleSheet, Text, View ,Image, TextInput,TouchableHighlight,StatusBar,Dimensions,PixelRatio } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { Constants} from 'expo';
// import { createStyles, maxHeight } from 'react-native-media-queries';
import { MediaQueryStyleSheet   } from "react-native-responsive";

const { width, height } = Dimensions.get('window');
var BUTTON_TEXT_FONT  = 16;
var BUTTON_TEXT_WIDTH=190  ;
var IMAGE_HEIGHT = '40%';
var TEXT_GRAY_FONT = 16;
var TEXT_RED_FONT =18;

if (PixelRatio.get() <= 2) {
  BUTTON_TEXT_FONT = 30;
  BUTTON_TEXT_WIDTH = 400;
  IMAGE_HEIGHT = '50%';
  TEXT_GRAY_FONT = 22;
  TEXT_RED_FONT =24;
};
//buttonText: {
//       fontSize:30,
//       width:400
//     },
//     image:{
//       height:'50%'
//     },
//     textGray:{
//       fontSize:22
//     },
//     textRed:{
//       fontSize:21
//     }

export default class slide extends Component {
  static navigationOptions = {
    headerStyle: { marginTop: Constants.statusBarHeight },
    header : null,

  };

  render() : React$Element<*>  {
    const { navigate } = this.props.navigation;
    return(

      <View style={styles.container}>

        <StatusBar barStyle='light-content' />
        <Image
          source={require('../../assets/image/PantallaCero.png')}
          style={styles.imgBackground}
        />
        <View style={styles.logoContainerText}>
          <Image
            style={styles.imageLogo}
            source={require('../../assets/image/logoDos.png')}
            resizeMode='cover'
          />
        </View>
        <Swiper style={styles.wrapper}
          dot={<View style={{backgroundColor: '#A91414', width: 8, height: 8, borderRadius: 7, marginLeft: 4, marginRight: 4}} />}
          activeDot={<View style={{backgroundColor: '#2B7B3D', width: 8, height: 8, borderRadius: 7, marginLeft: 4, marginRight: 4}} />}
          paginationStyle={{
            bottom: 45
          }}
          loop={false}>

          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/image/PantallaUno.png')}
              resizeMode='cover'
            />

            <View style={styles.containerText}>
              <Text style={styles.textRed}>Administre sus predios</Text>
              <Text style={styles.textGray}>No dejes para mañana lo que puedes hacer hoy. Realiza todas las tareas que requiere su sistema silvopastoril.</Text>
              <Text style={styles.textGray}>!Alcance la mayor productividad¡</Text>
            </View>

            <TouchableHighlight>
              <Text style={styles.buttonText} onPress={() => navigate('DrawerInformacionBasica',{user:'DrawerInformacionBasica'})}>Configurar mi predio</Text>
            </TouchableHighlight>


          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/image/PantallaDos.png')}
              resizeMode='cover'
            />

            <View style={styles.containerText}>
              <Text style={styles.textRed}>Revise su calendario</Text>
              <Text style={styles.textGray}>En el calendario encontrarás todas las actividades dirias, semanales y mensuales que permitirán que tu sistema silvopastoril esté en buen estado.</Text>
            </View>
            <TouchableHighlight>
              <Text style={styles.buttonText} onPress={() => navigate('DrawerStack',{user:'DrawerStack'})}>Revisar mis actividades</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/image/PantallaTres.png')}
              resizeMode='cover'
            />

            <View style={styles.containerText}>
              <Text style={styles.textRed}>Comuniquese con su asesor</Text>
              <Text style={styles.textGray}>Si necesitas ayuda, no dudes en escribir a tu asesor de proyecto, el te dará las mejores recomendaciones sobre una acción determinada para tu sistema.</Text>
              {/*  <Text style={styles.textGray}>Además recibirás recordatorios para que nada se te pase por alto.</Text>*/}
            </View>
            <TouchableHighlight>
              <Text style={styles.buttonText} onPress={() => navigate('DrawerStack',{user:'DrawerStack'})}>Ver mi chat</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/image/PantallaCuatro.png')}
            />

            <View style={styles.containerText}>
              <Text style={styles.textRed}>Envíe el informe de sus tareas</Text>
              <Text style={styles.textGray}>Una vez halla cumplido la totalidad sus protocolos, envíe el informe a su asesor o descarguelo en su dispositivo si lo necesita.</Text>
            </View>

            <TouchableHighlight>
              <Text style={styles.buttonText} onPress={() => navigate('DrawerStack',{user:'DrawerStack'})}>Ver mis protocolos</Text>
            </TouchableHighlight>

          </View>
        </Swiper>
        <View style={styles.saltar}>
          <Text style={styles.textGray} onPress={() => navigate('DrawerStack',{user:'DrawerStack'})}>
            saltar
          </Text>
        </View>

        {/*  1 2
          3= 4480
          5=5800
          6*=7200
          7=8760
          8=10,450
          9=11,282
          10= 13,178
          11*(1048)=15,226
          12= 17,442
          12,000 =100
          17,442=145,3

          100= 17,442
          145,3=25

          año dos = 46,884
          año tres = 93.780
          año cuatro= 199.560
          año cinco = 441.120*/}

        </View>

      )
    }
  }

  const styles = MediaQueryStyleSheet.create({
    wrapper: {
      backgroundColor: '#F6F6F6'
    },
    buttonText:{
      // fontSize: PixelRatio.get(1)*14,
      fontSize: BUTTON_TEXT_FONT,
      //fontWeight:'500',
      backgroundColor:'#A51414',
      color:'#ffff',

      marginVertical:10,
      // width:199,
      width:BUTTON_TEXT_WIDTH,
      borderRadius:25,
      textAlign:'center',
      paddingVertical:9,
      marginBottom:27,
    },


    slide: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      //  justifyContent: 'center',

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
    image: {
      width:'100%',
      // width:276,
      // height:200,
      height:IMAGE_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:9,
    },


    saltar:{
      marginLeft: '70%'
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
    logoContainerText: {
      // flex: 1,
      //backgroundColor:'#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      //paddingVertical:30,
      paddingTop:45,
      paddingBottom:3
      //paddingVertical:10,
      // borderWidth:30,
      //borderColor:'#FFFFFF',
    },
    textRed:{
      color:"#A91414",
      //fontSize:16.4,
      fontSize:TEXT_RED_FONT,
      marginBottom:10,
      textAlign: 'center'
    },
    textGray:{
      color:'#808080',
      marginBottom:10,
      //fontSize:12,
      fontSize:TEXT_GRAY_FONT,
      textAlign: 'center'
    },
    container: {
      flex: 1,
      backgroundColor: '#F6F6F6'
    },
    imgBackground: {
      width,
      height,
      backgroundColor: 'transparent',
      position: 'absolute'
    },
    imageLogo: {
      width:19,
      height:22,
      alignItems: 'center',
      justifyContent: 'center'
    }
  },

  // {
  //   "@media (min-device-height: 720)": {
  //     buttonText: {
  //       fontSize:30,
  //       width:400
  //     },
  //     image:{
  //       height:'50%'
  //     },
  //     textGray:{
  //       fontSize:22
  //     },
  //     textRed:{
  //       fontSize:21
  //     }
  //   }
  // }
);
