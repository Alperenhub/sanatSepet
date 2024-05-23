import { View, Text,Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LangSelector from '../components/LangSelector';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigate-env';


const image = {uri: 'https://s3-alpha-sig.figma.com/img/c924/d53a/9357ce251d2494e28b9a8a68615f030f?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZSOodNeO8nu2f4YKhli~LLcHutojDeWfOIQaToOi8Pg7zk3~bWCkAIAxmpzxxYCRTztrza3Pyebcgi4HSRxqzdJhLC8A1zkrq6HUduqSZS9SlI7vxL2j7GvS~tDhJZ~68URc98YKwbEiqc0v~dCUOIriOgZ92NuLA0qtqTZUEHe1aBpcEmOz3PVyvAjVT8EtzrqpxaDQFxOHtyFJBZeqImkgOOJwYr~f0Hre3wTghlElJPVkx8RcmCSVagJ7dHa~WmMG971DHuKGH-TBhEy0hyU0oF8SvMJU~lHgQlMAGSpKINRyMCzzmIlkyUMenwgbFLjYTai7RvXSDTdtBCu0A__'};

const VideoScreen = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView>
     <ImageBackground className='h-[100vh] w-full scale-[2] ' source={image} resizeMode='cover'>
    <View className='w-full h-screen bg-[#00000077] flex items-center justify-center'>
      
      <View className='mb-14'>
      <Image className='w-32 h-12'
      resizeMode='contain'
      source={require('../images/funsave.png')} />
      </View>

      <View className=''>
      <Image className='w-32 h-12'
      resizeMode='contain'
      source={require('../images/videoplay.png')} />

      <Image className='w-24 h-12 ml-4'
      resizeMode='contain'
      source={require('../images/videobar.png')} />
      </View>
    
      <View className='flex  mt-24 w-[40%] relative '>
        <Pressable onPress={()=>navigation.navigate('RegisterScreen')} className='bg-[#00A79D] rounded-md my-2'><Text className='text-center text-white'>Skip</Text></Pressable>
      </View>

      </View>
    
     </ImageBackground>
    </SafeAreaView>
  )
}

export default VideoScreen