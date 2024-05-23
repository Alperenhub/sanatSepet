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
import FirstScreen from '../src/screens/FirstScreen';
import CarouselPage from '../src/screens/CarouselPage';
import Ucuncu from '../src/screens/Ucuncu';
import VideoScreen from '../src/screens/VideoScreen';
import RegisterScreen from '../src/screens/RegisterScreen';
import Registration from '../src/screens/Registration';
import Main from '../src/screens/Main';



const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const AuthStack = () => {

  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}>
        <Stack.Screen name='FirstScreen' component={FirstScreen}/>
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="CategoryPage" component={CategoryPage}/>
        <Stack.Screen name='Movies' component={Movies}/>
        <Stack.Screen name='Books' component={Books}/>
        <Stack.Screen name='Theatres' component={Theatres}/>
        <Stack.Screen name='Filmlerim' component={Filmlerim}/>
        <Stack.Screen name='CarouselPage' component={CarouselPage}/>
        <Stack.Screen name='Ucuncu' component={Ucuncu}/>
        <Stack.Screen name='VideoScreen' component={VideoScreen}/>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
        <Stack.Screen name='Registration' component={Registration}/>
        <Stack.Screen name='Main' component={Main}/>

        

        
    </Stack.Navigator>
   
  )
}

export default AuthStack