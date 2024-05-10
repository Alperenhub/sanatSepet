import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IProduct } from './IProduct'
import ProductItem from '../components/ProductItem'
import CategoryNames from '../components/CategoryNames'

const getProduct = async ():Promise<IProduct> =>{
    const api = fetch('https://dummyjson.com/products')
    return (await api).json();   
}


const categories = [
    {id:1, name:'Aksiyon'},
    {id:2, name:'Macera'},
    {id:3, name:'Korku'},
    {id:4, name:'Dehşet'},
    {id:5, name:'Komedi'},
    {id:6, name:'Ağlak'},

];
const renderItem = ({item}:any) =>{
    return <CategoryNames category={item.name} />
}

const ProductList = () => {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(()=>{
        getProduct().then((response:any )=>{
            const data = response.products;
            setProducts(data)
        })
    },[])


  return (
    <View>
        <View className='p-2'>
        <FlatList 
        horizontal
        data= {categories}
        renderItem={renderItem}
        keyExtractor={(item)=> item.id.toString()}
        />
        </View>
        <View className='p-4'>
    <FlatList
    data={products}
    keyExtractor={item=>item.id.toString()}
    numColumns={3}
    renderItem={({item}) =>
        <ProductItem {...item}/>
    }
    
    />
        </View>
    </View>
  )
}

export default ProductList