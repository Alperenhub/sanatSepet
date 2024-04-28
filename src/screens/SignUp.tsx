import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Alert, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TextInputComp from '../components/TextInputComp'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../../navigate-env'






const SignUp = () => {
  
  const navigation = useNavigation<HomeScreenNavigationProp>();
    
    const [userName, setUserName] = useState<String>('')
    const [email, setEmail] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const messi =()=>{
        Alert.alert('Messi')
    }

  return (
    <SafeAreaView>
     <KeyboardAvoidingView behavior='height'>
      <ScrollView>
      <View className='h-screen w-full items-center justify-center bg-bg flex flex-col '>
        <View className=' justify-center mb-8'>
            <Text className='text-black text-3xl'>
                Kayıt Ol
            </Text>
        </View>

        <View className='items-center w-[70%] '>
      <Text className='self-start text-black -mb-2'>Kullanıcı adı</Text>  
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <TextInputComp
        value={userName}
        onChangeText={(text: String) => setUserName(text)}
        placeholder="sanatBenimİçindir"
        secureTextEntry={false}
        keyboardType="default" 
        onSubmitEditing={function a(){ console.log("meymun")}}/>
      </TouchableWithoutFeedback>
        </View>

        <View className=' items-center w-[70%] mt-4'>        
      <Text className='self-start text-black -mb-2'>E mail</Text>  
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <TextInputComp
        value={email}
        onChangeText={(text: String) => setEmail(text)}
        placeholder="sanat@sepet.com"
        secureTextEntry={true}
        keyboardType="default"
        onSubmitEditing={function a(){ console.log("meymun")}}/>
      </TouchableWithoutFeedback>
      </View>

      <View className=' items-center w-[70%] mt-4'>        
      <Text className='self-start text-black -mb-2'>Şifre</Text>  
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <TextInputComp
        value={password}
        onChangeText={(text: String) => setPassword(text)}
        placeholder="Şifre"
        secureTextEntry={true}
        keyboardType="default"
        onSubmitEditing={function a(){ console.log("meymun")}}/>
      </TouchableWithoutFeedback>
      </View>

      <View className='relative w-[90%] items-center mt-6'>
      <PrimaryButton onPress={() => messi()} text='Kayıt Ol' />
      </View>    

      <View className='mt-2 flex-row'> 
        <Text className='text-[#bbbbbb] text-xs'>Zaten üye misin? </Text> 
        <Pressable onPress={()=>navigation.navigate('LogIn')}>
         <Text className='text-[#2e62b6ef] text-xs underline'>Giriş Yap</Text>
        </Pressable>
      </View>


        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>    
  )
}

export default SignUp