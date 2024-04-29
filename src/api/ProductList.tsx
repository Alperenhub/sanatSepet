import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IProduct } from './IProduct'
import ProductItem from '../components/ProductItem'

const getProduct = async ():Promise<IProduct> =>{
    const api = fetch('https://dummyjson.com/products')
    return (await api).json();   
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