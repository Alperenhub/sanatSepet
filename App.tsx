import { View, Text, TouchableWithoutFeedback, } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from './src/components/PrimaryButton'
import TextInputComp from './src/components/TextInputComp'

const App = () => {

  const sacit =()=>{
    console.log('Yavuz çetin')
  }

  const [number, setNumber] = useState<any>("1");

  console.log(number)

  return (
    <View className='h-screen items-center justify-center bg-bg'>
      <PrimaryButton onPress={() => sacit()} text='Giriş Yap' />
      <TouchableWithoutFeedback>
      <TextInputComp
        value={number}
        onChangeText={(text: any) => setNumber(text)}
        placeholder="Enter text"
        secureTextEntry={false}
        keyboardType="default" 
        onSubmitEditing={function a(){ console.log("meymun")}}/>
      </TouchableWithoutFeedback>


      <Text className='text-black '> {number}</Text>
    </View>
  )
}

export default App