import React from 'react'
import SignUp from '../src/screens/SignUp'
import LogIn from '../src/screens/LogIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackNavigatorParamList } from '../navigate-env';
import CategoryPage from '../src/screens/CategoryPage';
import DrawerNavigation from './DrawerNavigation';
import Movies from '../src/screens/Movies';
import Books from '../src/screens/Books';
import Theatres from '../src/screens/Theatres';
import Filmlerim from '../src/screens/userFolder/Filmlerim';



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
        <Stack.Screen name='Movies' component={Movies}/>
        <Stack.Screen name='Books' component={Books}/>
        <Stack.Screen name='Theatres' component={Theatres}/>
        <Stack.Screen name='Filmlerim' component={Filmlerim}/>

        
    </Stack.Navigator>
   
  )
}

export default AuthStack