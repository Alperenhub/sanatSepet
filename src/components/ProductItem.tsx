import { View, Text, Image } from 'react-native'
import React from 'react'

type productProps = {
    title:string,
    thumbnail:string
}

const ProductItem = ({title,thumbnail}:productProps) => {
  return (
        <View className=' flex-row'>
        <View className='w-[120px]' >
            <Text className='text-black '>{title}</Text>
            <Image className='h-[100px] w-[100px]' source={{uri:thumbnail}} />
        </View>
        </View>
  )
}

export default ProductItem