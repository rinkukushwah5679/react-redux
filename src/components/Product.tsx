import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart, removeFromCart} from '../components/services/action';

const Product = (props) => {
	const cartItems = useSelector((state) => state.reducer)
	const [isAdded, setIsAdded] = useState(false)

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
		if (result.length){
			setIsAdded(true)
		}
		else{
			setIsAdded(false)
		}
	}, [cartItems])
	// console.warn(`***${JSON.stringify(item)}`)
  return (
    <View style={styles.product_content}>
    <Text style={{fontSize: 25}}>{item.name}</Text>
    <Text style={{fontSize: 25}}>{item.color}</Text>
    <Text style={{fontSize: 25}}>{item.price}</Text>
    <Image style={{width: 200, height: 200}} source={{uri: item.image}} />
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
  }
})

export default Product