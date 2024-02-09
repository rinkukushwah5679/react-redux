import React from 'react'
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './src/components/ProductWrapper'
import UserList from './src/components/UserList'
import PostDetail from './src/components/PostDetail';
import CartProduct from './src/components/CartProduct';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductWrapper} />
        <Stack.Screen name="User" component={UserList} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name="CartPost" component={CartProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;