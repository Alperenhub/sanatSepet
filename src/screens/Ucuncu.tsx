import { View, Text,Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LangSelector from '../components/LangSelector';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigate-env';


const image = {uri: 'https://s3-alpha-sig.figma.com/img/ea5a/5564/3e0f57084283c57ea0e5b53b775b62f2?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8okVvQmEGkDCdbjE5QWa8dz2pr5XYvOt9E8bA-opCMrqqLDu96Irimb91~T7lCuYYn-32tgIuOGWHk4PhpM4nJzNuVMQ~0VgypHhjZLztAm8FDZ2OnDXlmNzxJyi7P6DY0Ws1FkpUwIhPAwR2STfod0JFb4OW~bD8SWLIb896uR~3o154SxUQo2psII-Hd3JPxq7SZwCZgw4xsp9XEu0en5tGOZrO5FxLumSsmaYWzOnS8QjZBAvNQaUoMbUuyt9XJdadkg7H6gi0HQoFbfCTYT0gcGPKysdV96Sq5lfUGLpw-29fVMs-1QhpWt7qYSBrQXXwZbx2zn0SZRTIRCbw__'};

const Ucuncu = () => {

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
        <Text className='text-white text-center w-[120px]'>
        Explore Türkiye to its full potential!
        </Text>
      </View>
    
      <View className='flex  mt-24 w-[40%] relative '>
        <Pressable onPress={()=>navigation.navigate('VideoScreen')} className='bg-[#00A79D] rounded-md my-2'><Text className='text-center text-white'>Skip</Text></Pressable>
      </View>

      </View>
    
     </ImageBackground>
    </SafeAreaView>
  )
}

export default Ucuncu