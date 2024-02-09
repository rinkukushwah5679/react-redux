import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart, removeFromCart} from '../components/services/action';
import PostDetail from '../components/PostDetail';
import { useNavigation } from '@react-navigation/native';
const Product = (props) => {
	const cartItems = useSelector((state) => state.reducer.cart)
	const [isAdded, setIsAdded] = useState(false)
	const navigation = useNavigation();
	const item = props.post
	const dispatch = useDispatch();
	const HandleAddToCart = (item) => {
		dispatch(addToCart(item))
	}
	const HandleRemoveToCart = (item) => {
		dispatch(removeFromCart(item.name))
	}

	useEffect(() => {
		// if (cartItems && cartItems.length){
		// 	cartItems.forEach((product) =>{
		// 		if (product.name === item.name){
		// 			setIsAdded(true)
		// 		}
		// 	})
		// }
		let result = cartItems.filter((product) => {
			return product.name === item.name
		});
		// console.warn("8888888888888", cartItems)
		if (result.length){
			setIsAdded(true)
		}
		else{
			setIsAdded(false)
		}
	}, [cartItems])
  const handlePost = (post) => {
  	navigation.navigate('PostDetail',{
  		post: post,
  	});
  };

	// console.warn(`***${JSON.stringify(item)}`)
  return (
    <View style={styles.product_content}>
      <TouchableOpacity 
      	key={item}
      	onPress={() => handlePost(item)}
      >
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.color}</Text>
        <Text style={styles.text}>{item.price}</Text>
        <Image style={{width: 200, height: 200}} source={{uri: item.image}} />
      </TouchableOpacity>
      {
        isAdded?
        <Button title="Remove to cart" onPress={() => HandleRemoveToCart(item)}/>
        :
        <Button title="Add to cart" onPress={() => HandleAddToCart(item)}/>
      }
    
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  product_content: {
  	alignItems: 'center',
  	borderBottomColor: 'orange',
  	borderBottomWidth: 2,
  	padding: 5
  },
  text: {
    fontSize: 25,
    marginBottom: 5,
  },
})

export default Product