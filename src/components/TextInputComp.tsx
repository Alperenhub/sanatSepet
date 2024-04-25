import { View, Text,TextInput } from 'react-native'
import React from 'react'

type Props={
    onChangeText:(text:string)=>void;
    onSubmitEditing:()=>void;
    value: any;
    placeholder:string;
    secureTextEntry:boolean;
    keyboardType:any;
}


const TextInputComp = ({onChangeText, onSubmitEditing,value,placeholder,secureTextEntry,keyboardType }:Props) => {
  
  
    return (
  
  <TextInput className='w-[100%] h-12  bg-slate-50 p-2 mt-3 text-red-800'
  onChangeText={onChangeText}
  onSubmitEditing={onSubmitEditing}
  value={value}
  placeholder={placeholder}
  placeholderTextColor={'#bbbbaa88'}
  secureTextEntry={secureTextEntry}
  keyboardType={keyboardType}      
  />

  
  )
}

export default TextInputComp