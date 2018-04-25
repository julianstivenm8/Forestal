import {DrawerNavigator} from 'react-navigation';

import Protocolos from '../components/protocolos/protocolos.js';
import Muestra from '../components/protocolos/muestra.js';
import InformacionBasica from '../components/informacionBasica/informacionBasica.js';
import InventarioAnimal from '../components/informacionBasica/inventarioAnimal.js';

const DrawerScreen = DrawerNavigator({
    Protocolos: {screen: Protocolos},
    InformacionBasica: {screen: InformacionBasica},
    InventarioAnimal:{screen: InventarioAnimal},

}, {
    headerMode: 'none',
    
})

export default DrawerScreen;
