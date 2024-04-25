import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LogIn from '../src/screens/LogIn';
import SignUp from '../src/screens/SignUp';


const Stack = createNativeStackNavigator();

const UserStack = () => {

  return (
        <Stack.Navigator>
            <Stack.Screen name='LogIn' component={LogIn}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
        </Stack.Navigator>    
  )
}

export default UserStack