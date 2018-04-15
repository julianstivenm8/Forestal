import {DrawerNavigator} from 'react-navigation';

import Protocolos from '../components/protocolos/protocolos.js';
import Muestra from '../components/protocolos/muestra.js';
import PasoUno from '../components/pasos/pasoUno.js';
import PasoDos from '../components/pasos/pasoDos.js';
import PasoTres from '../components/pasos/pasoTres.js';


const DrawerScreen = DrawerNavigator({
    Protocolos: {screen: Protocolos},
    Muestra: {screen: Muestra},
  //  PasoUno: {screen: PasoUno},
//    PasoDos: {screen: PasoDos},
  //  PasoTres: {screen: PasoTres},
}, {
    headerMode: 'none',
})

export default DrawerScreen;
