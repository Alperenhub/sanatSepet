import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';

const Main = () => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('https://localhost:7181/api/Restaurant/GetAll', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Error fetching restaurants');
        }

        const data = await response.json();
        setRestaurants(data);
      } catch (error: any) {
        setError(error.message);
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  const navigateToRestaurant = (id: any) => {
    // Burada restaurant detay sayfasına navigasyon yapabilirsiniz
    // Örneğin: navigation.navigate('RestaurantDetail', { id });
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => navigateToRestaurant(item.id)} style={{ marginBottom: 20, alignItems: 'center' }}>
      <Image source={{ uri: item.imageURL }} style={{ width: 200, height: 150, borderRadius: 10 }} />
      <Text style={{ marginTop: 10, textAlign: 'center' }}>{item.name}</Text>
    </TouchableOpacity>
  );

  const image = { uri: 'https://s3-alpha-sig.figma.com/img/001f/77b2/886590aa2503bc018c825c6bd18b40aa?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SGszR95wzuI-dMlvUktnlDtyPTFVaKoa7UjbRrrzX9PNl3Nw3~x5NsVz3hTCSS8rrKJJJ-UpvddexeMefFJ1xDu8q~COewt6ogVd8beXKGDf7-md8D9brPeLtCsFhUK94PMpHq1hJf7Um08k1rM5bGh1upkfzMurSWRaxRaQtc6lgxyD81RpeR95WKmWWTcB-gvdEwMOi91JooNAa0A90koq7sO5nsd-Oo3bJfz8Ms-8Oo0vCcWsbueRwDuhHXDrMWDRJTnxSjtnH7ySI0AOMbiYNT4lbX840Jau7LMXQy5h6T3NnRnBvqkjLMqErlXue0woe2zbyPzmjdkdJ8w~rQ__' };

  return (
    <SafeAreaView>
      <ImageBackground className='h-[30vh]' source={image} resizeMode='cover'>
        <View className='p-6'>
          <Text className='font-bold text-2xl text-white'>Explore Türkiye</Text>
          <Text className='font-bold text-md text-white'>& Save in best places!</Text>
        </View>
        <View>
          <Image className='w-[99%]' resizeMode='contain' source={require('../images/comp.png')} />
        </View>
      </ImageBackground>
      <View className='mt-40'>
        {error && <Text style={{ color: 'red', marginBottom: 20 }}>{error}</Text>}
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Main;
