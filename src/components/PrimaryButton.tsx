import { View, Text, Pressable } from 'react-native'
import React from 'react'

type Props = {
    text: string;
    onPress: ()=>void
}


const PrimaryButton = ({text,onPress}:Props) => {


  return (
    
    <Pressable className='bg-[#00A79D] w-[150px] py-1 rounded-md  ' onPress={onPress}>
      <Text className='text-center text-white text-md'>{text}</Text>
    </Pressable>
  )
}

export default PrimaryButton