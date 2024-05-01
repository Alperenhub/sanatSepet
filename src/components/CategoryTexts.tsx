import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../../navigate-env'

type textProps = {
    screenName:string,
    text:string
}



const CategoryTexts = ({screenName,text}:textProps) => {
    const navigation = useNavigation<HomeScreenNavigationProp>();



  return (
    <View className='bg-primary border-b-2 px-5 py-2'>
        <Pressable onPress={()=>navigation.navigate(`${screenName}`)}><Text className='text-2xl text-black'>{text}</Text></Pressable>
    </View>
  )
}

export default CategoryTexts