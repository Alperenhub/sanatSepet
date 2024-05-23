import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigate-env';
import { TextInput } from 'react-native-paper';

const Registration = () => {

    const navigation = useNavigation<HomeScreenNavigationProp>();


  return (
    <View className='h-screen flex flex-col bg-[#cccccc34]'>
        <View className='flex-1 flex-col flex items-center justify-around '>
            <View className='flex items-center'>
        <Image className='w-28'
      resizeMode='contain'
      source={require('../images/funsave.png')} />
      <Text className='font-bold text-xl text-black'>Become a Member</Text>
            </View>

            <View className='flex flex-col gap-2 mt-2'>
                <View className='flex flex-row'>
                    <Text className='text-black text-start w-[150px] text-md'>Name,Surname</Text>
                    <TextInput placeholder='John Doe' className='bg-white w-40 h-7 rounded-none ml-2'></TextInput>
                </View>
                <View className='flex flex-row'>
                    <Text className='text-black text-start w-[150px] text-md'>Password</Text>
                    <TextInput secureTextEntry  className='bg-white w-40 h-7 rounded-none ml-2'></TextInput>
                </View>
                <View className='flex flex-row'>
                    <Text className='text-black text-start w-[150px] text-md'>Repeat Password</Text>
                    <TextInput secureTextEntry className='bg-white w-40 h-7 rounded-none ml-2'></TextInput>
                </View>
                <View className='flex flex-row'>
                    <Text className='text-black text-start w-[150px] text-md'>E-mail</Text>
                    <TextInput placeholder='john.doe@gmail.com' inputMode='email' className='bg-white w-40 h-7 rounded-none ml-2'></TextInput>
                </View>
                <View className='flex flex-row'>
                    <Text className='text-black text-start w-[150px] text-md'>Gender</Text>
                    <TextInput placeholder='Female ▼' className='bg-white w-40 h-7 rounded-none ml-2'></TextInput>
                </View>
                <View className='flex flex-row'>
                    <Text className='text-black text-start w-[150px] text-md'>Age Group</Text>
                    <TextInput placeholder='18-30' className='bg-white w-40 h-7 rounded-none ml-2'></TextInput>
                </View>
                <View className='flex flex-row'>
                    <Text className='text-black text-start w-[150px] text-md'>Country</Text>
                    <TextInput placeholder='Türkiye ▼' className='bg-white w-40 h-7 rounded-none ml-2'></TextInput>
                </View>
                
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
                <Text className='text-black text-center font-bold'>Already a member? Click to
                    <Text className='text-[#00A79D] underline font-bold'> Login</Text></Text>
            </View>

            <View className='flex flex-col'>

            <Pressable onPress={()=>navigation.navigate('Main')} className='bg-[#00A79D] rounded-md my-2 w-[250px]'><Text className='text-center text-2xl text-white py-2'>Continue</Text></Pressable>
            <Pressable className='bg-white rounded-md my-2 w-[250px]'><Text className='text-center text-2xl text-[#00A79D] py-2'>Back</Text></Pressable>

            </View>
        </View>
    </View>
  )
}

export default Registration