import { View, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, SafeAreaView, Pressable, TouchableOpacity, Alert, } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import TextInputComp from '../components/TextInputComp'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../../navigate-env'


const LogIn = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>();


  const [number, setNumber] = useState<any>("");


  return (
    <SafeAreaView>
    <KeyboardAvoidingView behavior='height'>
      <ScrollView>
    <View className='h-screen w-full items-center justify-center bg-bg flex flex-col '>
        <View className=' justify-center mb-8'>
            <Text className='text-black text-3xl'>
                Hoşgeldiniz
            </Text>
        </View>
      
      <View className='items-center w-[70%] '>
      <Text className='self-start text-black -mb-2'>E-mail</Text>  
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <TextInputComp
        value={number}
        onChangeText={(text: any) => setNumber(text)}
        placeholder="sanat@sepet.com"
        secureTextEntry={false}
        keyboardType="default" 
        onSubmitEditing={function a(){ console.log("meymun")}}/>
      </TouchableWithoutFeedback>
        </View>

        <View className=' items-center w-[70%] mt-4'>        
      <Text className='self-start text-black -mb-2'>Şifre</Text>  
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <TextInputComp
        value={number}
        onChangeText={(text: any) => setNumber(text)}
        placeholder="Şifre"
        secureTextEntry={true}
        keyboardType="default"
        onSubmitEditing={function a(){ console.log("meymun")}}/>
      </TouchableWithoutFeedback>
      <Pressable className='self-end' onPress={()=>Alert.alert('Ağla')}>
      <Text className='text-[#bbbbbb] underline mt-1 self-end text-xs'>Şifremi unuttum</Text>
      </Pressable>
      </View>

      <View className='relative w-[90%] items-center mt-6'>
      <PrimaryButton onPress={() => navigation.navigate('CategoryPage')} text='Giriş Yap' />
      </View>    

      <View className='mt-2 flex-row'> 
        <Text className='text-[#bbbbbb] text-xs'>Hesabın yok mu? </Text> 
        <Pressable onPress={()=>navigation.navigate('SignUp')}>
         <Text className='text-[#2e62b6ef] text-xs underline'>Kayıt Ol!</Text> 
         </Pressable>
      </View>

    </View>
    </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LogIn