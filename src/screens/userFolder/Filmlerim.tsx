import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import {RouteProp, useNavigation} from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../../../navigate-env'

type Props = {
  route: RouteProp<HomeScreenNavigationProp,'Filmlerim'>;
}

const Filmlerim = ({route}:Props) => {

  

  const navigation = useNavigation<HomeScreenNavigationProp>();

const {title, thumbnail} = route.params || {};
  return (
    <View>
      <Text className='text-black text-2xl'>Filmlerim</Text>
      <Pressable className='bg-secondary rounded-2xl w-72' 
       onPress={()=>navigation.navigate('Movies') }>
         <Text className='text-black text-xl'> Ben Geri Dön Butonuyum</Text>
         </Pressable>
      { 
      title&&
      <><Text numberOfLines={1} className='text-black'>{title}</Text><Image source={{ uri: thumbnail }} style={{ width: 100, height: 100 }} /></>
      }
    </View>
  )
}

export default Filmlerim