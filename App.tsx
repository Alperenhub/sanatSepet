import React from 'react'
import LogIn from './src/screens/LogIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './src/screens/SignUp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='LogIn' component={LogIn}/>
      <Stack.Screen name='SignUp' component={SignUp}/>
    </Stack.Navigator>
   </NavigationContainer> 
  
  

)
}

export default App