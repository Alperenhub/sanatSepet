import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const LangSelector = () => {

  return (
    <View className='shadow-lg bg-[#00A79D] w-[80px] h-[24px] rounded-sm px-2 py-1'>
      <Text className='text-start text-[10px] text-white'>Turkish         ▼</Text>
      
    </View>
  )
}

export default LangSelector