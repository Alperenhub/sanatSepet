import { View, Text } from 'react-native'
import React from 'react'

type Prop = {
    category: string;
}

const CategoryNames = ({category}:Prop) => {
  return (
    <View className='m-1 bg-gray-400 active:bg-gray-700 rounded-3xl p-1 w-[80px] h-[30px]'>
      <Text className='text-black text-center '>{category}</Text>
    </View>
  )
}

export default CategoryNames