import React from 'react'
import RootNavigation from './navigation/RootNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoryPage from './src/screens/CategoryPage';
import { NavigationContainer } from '@react-navigation/native';


// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () =>{
//   return(
//     <Drawer.Navigator>
//       <Drawer.Screen name="CategoryPage" component={CategoryPage} />
//     </Drawer.Navigator>
//   )
// }



const App = () => {
  return (
  //  <>
  <RootNavigation/>
   // /* <NavigationContainer>
    // <DrawerNavigator/> 
   // </NavigationContainer> */}

  // </>

)
}

export default App