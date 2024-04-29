import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import LogIn from '../src/screens/LogIn';
import CategoryPage from '../src/screens/CategoryPage';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Giriş Yap" component={LogIn}/>
        <Drawer.Screen name="Filmler" component={CategoryPage}/>

    </Drawer.Navigator>
  )
}

export default DrawerNavigation