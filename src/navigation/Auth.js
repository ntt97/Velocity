import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login/Login'
import Register from '../screens/Register/Register'
import Forgot from '../screens/Forgot/Forgot'
const AuthStack = createStackNavigator({
    Login,
    Register,
    Forgot
},
{
    defaultNavigationOptions:{
        header:null
    }
})
export default AuthStack