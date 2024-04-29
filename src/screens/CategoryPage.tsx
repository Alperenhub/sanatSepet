import { View, Text, Pressable } from 'react-native'
import React from 'react'
import ProductList from '../api/ProductList'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../../navigate-env'



const CategoryPage = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>();
  
    return (
    <View>
      <Pressable onPress={()=>navigation.navigate('DrawerNavigation')}><Text className='text-lg'>Drawer'ı aç</Text></Pressable>
    <ProductList/>
    </View>
  )
}

export default CategoryPage