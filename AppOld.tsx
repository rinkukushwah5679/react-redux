import React from 'react'
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native'
import Header from './src/components/Header'
import Product from './src/components/Product'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  const products = [
  {
    name: "samsung mobile",
    color: "white",
    price: 30000,
    image: "https://blogs-images.forbes.com/gordonkelly/files/2017/02/Screenshot-2017-02-24-at-01.19.06.png"
  },
  {
    name: "apple i phone",
    color: "black",
    price: 130000,
    image: "https://cdn.pixabay.com/photo/2017/10/15/16/20/iphone-2854305_640.png"
  },
  {
    name: "nokia mobile",
    color: "green",
    price: 20000,
    image: "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
  },
  {
    name: "realme mobile",
    color: "yelslow",
    price: 1500,
    image: "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
  }
  ]
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {
          products.map((item) =><Product post={item} />)
        }
      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App