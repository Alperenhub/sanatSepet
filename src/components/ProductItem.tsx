import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type productProps={
    
    title:string,
    thumbnail:string
}

const ProductItem = ({title,thumbnail}:productProps) => {
  return (
    <SafeAreaView>
    <View className='bg-bg'>
        
    <TouchableOpacity className='mx-2 h-[100px] w-[100px] my-2'>
      <Text numberOfLines={1} className='text-black text-xs '>{title}</Text>
        <Image className='h-[80px] w-[80px] rounded-lg' source={{uri:thumbnail}} />
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default ProductItem