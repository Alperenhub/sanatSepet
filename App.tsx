import React from 'react'
import LogIn from './src/screens/LogIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './src/screens/SignUp';
import RootNavigation from './navigation/RootNavigation';

//const Stack = createNativeStackNavigator();

const App = () => {
  return (
  
  //  <NavigationContainer>
  //   <Stack.Navigator>
  //     <Stack.Screen name='LogIn' component={LogIn}/>
  //     <Stack.Screen name='SignUp' component={SignUp}/>
  //   </Stack.Navigator>
  //  </NavigationContainer> 
  <RootNavigation/>
  
  

)
}

export default App