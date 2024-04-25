import { View, Text, Pressable } from 'react-native'
import React from 'react'

type Props = {
    text: string;
    onPress: ()=>void
}


const PrimaryButton = ({text,onPress}:Props) => {


  return (
    
    <Pressable className='bg-third px-12 py-2 rounded-3xl ' onPress={onPress}>
      <Text className='text-center text-white text-2xl'>{text}</Text>
    </Pressable>
  )
}

export default PrimaryButton