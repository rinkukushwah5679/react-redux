import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
	const cartDate = useSelector((state)=> state.reducer.cart)
	const [cartItems, setCartItems] = useState(0);
  const navigation = useNavigation();
  // console.warn("*",cartDate)
	useEffect(() => {
		setCartItems(cartDate.length)
	}, [cartDate])
  return (
    <View>
        <Text style={{fontSize:30, textAlign: 'right', padding: 10, backgroundColor: 'orange'}}>
          <TouchableOpacity onPress={() => navigation.navigate("CartPost")} >
            <View style={{backgroundColor: "yellow", borderRadius: 20, heigth: 40, width: 40}}>
              <Text style={{fontSize:30, textAlign: 'center'}}>{cartItems}</Text>
            </View>
          </TouchableOpacity>
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