import { View, Text,Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LangSelector from '../components/LangSelector';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigate-env';


const image = {uri: 'https://s3-alpha-sig.figma.com/img/46cd/5538/4eda8d22cff8aff1be90532495337797?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qDq5ERL4Lwa6oxIiDV5tF5~qscj7Wq2BaMLKwcqM8Ru2TiyMGoAZfYQsH44XIeTkd~U2Smc8b5Y8nRPWvvS8~RYojxCVphiFpJuyntX4qrpKsa5ZfLtIJRNguHX4GKEPA8ndQHSzeMOS0z8rXWMXjIz1UdGVm-D6-rekRRKRr~8yImBk-hae5Ny-hUJ4eGBwagz97SsuX8eRY9RdzTwsPMOqyVfPzuokbAW7e3oprPQYiee9h7yON8EOdlwhRN~2EOA-ADlMNq0r6dlmemqknL7Z7oLNtnemPvTzXGxwvWaOkDL3xOWMi3mqzqzwnZAtT80IzUwZAgS-ut-Qnp-dVA__'};


const FirstScreen = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>();



  return (
    <SafeAreaView>
     <ImageBackground className='h-[100vh] w-full scale-[2] ' source={image} resizeMode='cover'>
    <View className='w-full h-screen bg-[#00000077] flex items-center justify-center'>
      
      <View className='mt-10'>
      <Image className='w-32'
      resizeMode='contain'
      source={require('../images/funsave.png')} />
      </View>

     <View className='flex flex-col mt-5'>
      <View>
        <Text className='text-white text-center font-bold'>Welcome</Text>
        <Text className='text-white text-[8px] text-center my-1'>Please select a language:</Text>
      </View>
     
      <View className='mt-8 w-full ml-[33px] mb-3 flex justify-center '>
        <LangSelector/>
      </View>
      <View className='relative flex flex-col mt-12 '>
        <PrimaryButton text='Contiune' onPress={()=>navigation.navigate('Books')}/>
        <Pressable className='bg-white rounded-md my-2'><Text className='text-center text-[#00A79D]'>Exit</Text></Pressable>
      </View>

      </View>
    </View>
     </ImageBackground>
    </SafeAreaView>
  )
}

export default FirstScreen