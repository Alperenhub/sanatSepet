import React from 'react'
import SignUp from '../src/screens/SignUp'
import LogIn from '../src/screens/LogIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackNavigatorParamList } from '../navigate-env';
import CategoryPage from '../src/screens/CategoryPage';
import DrawerNavigation from './DrawerNavigation';



const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const AuthStack = () => {



  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}>
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="CategoryPage" component={CategoryPage}/>
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation}/>

        
    </Stack.Navigator>
   
  )
}

export default AuthStack