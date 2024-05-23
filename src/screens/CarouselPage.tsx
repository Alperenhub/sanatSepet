import { View, Text,Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LangSelector from '../components/LangSelector';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigate-env';


const image = {uri: 'https://s3-alpha-sig.figma.com/img/fcfb/a9a9/0a1e90d32d18effdeffba6919b7e82ca?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ppRer0eNqeDsxryKJYnerh~kjSYNMoAL5LLChmIvdQZWEwdQTq6byzKO8Ft930arRg7iU~~TRne-ptov3K6EVALNCSF5J1~eW5e92xlMDwquAnJI4F8xs~1JN3ADlWEU1hxD3J22aBgxecv32msM-uGD34kZZGzBd8iG35o58alc~yFBlRYlyDgBA1VyYASZZnjuLa4zb4VhKDH4cgRMFOme0VMpM4osjEhk2iDa5eQnw2KAYqL7i32iJOmKoT~oY5nsYoqDvMOtnV3VwCX4fl9fMauzm2JafBxz-KcJEk9egJ5YyadgcrjIYGmSL1cWDiNKwBKairCeRvUtDn3LsQ__'};

const CarouselPage = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView>
     <ImageBackground className='h-[100vh] w-full scale-[2] ' source={image} resizeMode='cover'>
    <View className='w-full h-screen bg-[#00000077] flex items-center justify-center'>
      
      <View className='mb-14'>
      <Image className='w-32 h-12'
      resizeMode='contain'
      source={require('../images/yarifun.png')} />
      </View>

      <View>
        <Text className='text-white text-center w-[90px]'>
        Choose your membership.
        </Text>
      </View>
    
      <View className='flex  mt-24 w-[40%] relative '>
        <Pressable onPress={()=>navigation.navigate('Ucuncu')} className='bg-white rounded-md my-2'><Text className='text-center text-[#00A79D]'>Skip</Text></Pressable>
      </View>

      </View>
    
     </ImageBackground>
    </SafeAreaView>
  )
}

export default CarouselPage