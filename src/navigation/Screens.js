import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import Analytics from '../screens/Analytics/Analytics'
import Chat from '../screens/Chat/Chat'
import Map from '../screens/Map/Map'
import Overview from '../screens/Overview/Overview'
import Service from '../screens/Service/Service'
import Setting from '../screens/Setting/Setting'
import Vehicles from '../screens/Vehicles/Vehicles'
const ScreenStack = createStackNavigator({
    Analytics,
    Overview,
    Chat,
    Service,
    Setting,
    Map,
    Vehicles
},
{
    header:null
})
export default ScreenStack