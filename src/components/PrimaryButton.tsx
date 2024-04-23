import { View, Text, Pressable } from 'react-native'
import React from 'react'

type Props = {
    text: string;
    onPress: ()=>void
}


const PrimaryButton = ({text,onPress}:Props) => {


  return (
    
    <Pressable className='bg-third p-2 rounded-3xl w-[50%]' onPress={onPress}>
      <Text className='text-center text-white text-2xl'>{text}</Text>
    </Pressable>
  )
}

export default PrimaryButton