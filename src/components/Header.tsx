import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {useSelector} from 'react-redux';

const Header = () => {
	const cartDate = useSelector((state)=> state.reducer)
	const [cartItems, setCartItems] = useState(0);
	useEffect(() => {
		setCartItems(cartDate.length)
	}, [cartDate])
  return (
    <View>
      <Text style={{fontSize:30, textAlign: 'right', padding: 10, backgroundColor: 'orange'}}>
      	<View style={{backgroundColor: "yellow", borderRadius: 20, heigth: 40, width: 40}}>
      		<Text style={{fontSize:30, textAlign: 'center'}}>{cartItems}</Text>
      	</View>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Header