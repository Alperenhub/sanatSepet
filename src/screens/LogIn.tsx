import { View, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import TextInputComp from '../components/TextInputComp'

const LogIn = () => {

  const sacit =()=>{
    console.log('Yavuz çetin')
  }

  const [number, setNumber] = useState<any>("Entero");


  return (
    <KeyboardAvoidingView behavior='height'>
      <ScrollView>
    <View className='h-screen w-full items-center justify-center bg-bg flex flex-col space-y-1'>
        <View className='flex-[3] justify-center'>
            <Text className='text-black text-3xl'>
                Hoşgeldiniz
            </Text>
        </View>
      
      <View className='items-center w-[70%] flex-[1]'>
      <Text className='self-start text-black -mb-2'>E-mail</Text>  
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <TextInputComp
        value={number}
        onChangeText={(text: any) => setNumber(text)}
        placeholder="Enter text"
        secureTextEntry={false}
        keyboardType="default" 
        onSubmitEditing={function a(){ console.log("meymun")}}/>
      </TouchableWithoutFeedback>
        </View>

        <View className='flex-[1] items-center w-[70%]'>        
      <Text className='self-start text-black -mb-2'>Şifre</Text>  
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <TextInputComp
        value={number}
        onChangeText={(text: any) => setNumber(text)}
        placeholder="Enter text"
        secureTextEntry={true}
        keyboardType="default"
        onSubmitEditing={function a(){ console.log("meymun")}}/>
      </TouchableWithoutFeedback>
      </View>

      <View className='relative w-[90%] items-center flex-[1]'>
      <PrimaryButton onPress={() => sacit()} text='Giriş Yap' />
      
      </View>    

    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LogIn