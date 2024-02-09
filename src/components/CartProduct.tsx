import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../components/services/action';
import { useNavigation } from '@react-navigation/native';
const CartProduct = () => {
  const cart_products = useSelector((sd) => sd.reducer.cart)
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    setProducts(cart_products);
  }, [cart_products])

  const HandleRemoveToCart = (post) => {
    dispatch(removeFromCart(post.name))
  }

  const goToHome = () => {
    navigation.navigate('PostDetail',{
  	});
  }

  return (
    <View>
      {
        products.length ? (
          products.map((post) => <View style={styles.product_content}>
            <Text style={styles.text}>{post.name}</Text>
            <Text style={styles.text}>{post.color}</Text>
            <Text style={styles.text}>{post.price}</Text>
            <Image style={{ width: 200, height: 200 }} source={{ uri: post.image }} />
            <Button title="Remove to cart" onPress={() => HandleRemoveToCart(post)} />
          </View>)
        ) : <View style={{ marginHorizontal: 40, marginVertical: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'black', fontSize: 20, fontStyle: "italic" }}>There is no products</Text>
          <Button title="Shop now" onPress={() => navigation.navigate("Home")} />
        </View>
      }
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginBottom: 5,
  },
  product_content: {
    alignItems: 'center',
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
    padding: 5
  },
})


export default CartProduct