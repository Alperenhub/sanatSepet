import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigate-env';

const RegisterScreen = () => {

    const navigation = useNavigation<HomeScreenNavigationProp>();


  return (
    <View className='h-screen flex flex-col bg-[#cccccc34]'>
        <View className='flex-1 flex-col flex items-center justify-around bg-white rounded-br-[90px]'>
            <View>
        <Image className='w-40'
      resizeMode='contain'
      source={require('../images/funsave.png')} />
            </View>

            <View>
                <Pressable onPress={()=>navigation.navigate('Registration')}>
            <Image  className='w-44'
            resizeMode='contain'
            source={require('../images/registertools.png')} />
                </Pressable>
            </View>

        </View>
        <View className='flex-1 flex flex-col items-center justify-around'>
            <View>
                <Text className='text-lg text-black'>You can also connect with:</Text>
            </View>

            <View>
            <Image  className='w-44'
            resizeMode='contain'
            source={require('../images/socialmedia.png')} />
            </View>

            <View>
                <Text className='text-black text-center'>By continuing to use the application, I accept the 
                    <Text className='text-[#00A79D]'> Membership Agreement</Text> and the use of my personal information within the scope of the
                    <Text className='text-[#00A79D]'> Explicit Consent Text.</Text></Text>
            </View>

            <View>
            <Pressable className='bg-white rounded-md my-2 w-[250px]'><Text className='text-center text-2xl text-[#00A79D]'>Exit</Text></Pressable>

            </View>
        </View>
    </View>
  )
}

export default RegisterScreen