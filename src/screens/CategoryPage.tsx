import { View, Text } from 'react-native'
import React from 'react'
import CategoryTexts from '../components/CategoryTexts'

const CategoryPage = () => {
  return (
    <View className='items-center justify-center bg-bg h-screen w-full'>
      <CategoryTexts 
      text='Filmler'
      screenName='Movies'
      />
      <CategoryTexts 
      text='Kitaplar'
      screenName='Books'
      />
      <CategoryTexts 
      text='Tiyatrolar'
      screenName='Theatres'
      />

    </View>
  )
}

export default CategoryPage