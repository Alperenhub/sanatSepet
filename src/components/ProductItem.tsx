import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import Filmlerim from '../screens/userFolder/Filmlerim'
import { HomeScreenNavigationProp } from '../../navigate-env'

type productProps={
    
    title:string,
    thumbnail:string
}

const ProductItem = ({title,thumbnail}:productProps) => {

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [isModal, setIsModal] = useState<boolean>(false)

 const handleVeri = () =>{
    navigation.navigate("Filmlerim", {title,thumbnail})
 }

  return (
    <SafeAreaView>
    <View className='bg-bg'>
        
    <TouchableOpacity onPress={()=>{setIsModal(!isModal)}} className='mx-2 h-[100px] w-[100px] my-2'>
      <Text numberOfLines={1} className='text-black text-xs '>{title}</Text>
        <Image className='h-[80px] w-[80px] rounded-lg' source={{uri:thumbnail}} />
    </TouchableOpacity>


    <Modal 
    animationType='fade'
    transparent
    visible={isModal}
    >
      <View className='flex items-center justify-center h-screen w-full '>
      <View className='bg-third rounded-2xl h-52 w-40 p-2 items-center'>
        <Text className='text-center'>{title}</Text>
        <Image className='h-[80px] w-[80px] rounded-lg' source={{uri:thumbnail}} />
        <Pressable onPress={()=>{setIsModal(!isModal)}}>
        <Text>Kapat</Text>
        </Pressable>
        <Pressable onPress={handleVeri}>
        <Text>İzleyeceklerime ekle</Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate('Filmlerim')}>
          <Text>Filmlerim'e git</Text>
        </Pressable>
      </View>
      </View>
      
    </Modal>
</View>    


    
    </SafeAreaView>
  )
}

export default ProductItem