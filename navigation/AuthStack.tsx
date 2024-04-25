import React from 'react'
import SignUp from '../src/screens/SignUp'
import LogIn from '../src/screens/LogIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackNavigatorParamList } from '../navigate-env';



const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
   
  )
}

export default AuthStack