import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LogIn from '../src/screens/LogIn';
import SignUp from '../src/screens/SignUp';


const Stack = createNativeStackNavigator();

const UserStack = () => {

  return (
        <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}>
            <Stack.Screen name='LogIn' component={LogIn}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name="CategoryPage" component={CategoryPage}/>

        </Stack.Navigator>    
  )
}

export default UserStack