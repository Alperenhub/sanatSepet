import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const SearchBar = () => {
  return (
    <View>
        <TextInput 
        className='bg-white w-full p-2 rounded-2xl'
        placeholder='Ara..'

        />
    </View>
  )
}

export default SearchBar