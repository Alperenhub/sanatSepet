import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IProduct } from './IProduct';
import ProductItem from '../components/ProductItem';


const  getProducts = async():Promise<IProduct> =>{
    const api = fetch('https://dummyjson.com/products')
    return (await api).json();
}


const ProductList = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(()=>{
        getProducts().then((response:any )=>{
            const data = response.products;
            setProducts(data)
        })
    },[])

  return (
    <FlatList data={products} 
    keyExtractor={item=>item.id.toString()}
    renderItem={({item})=>(
        <ProductItem {...item} />
        
    )}
    numColumns={3}
    />
  )
}

export default ProductList