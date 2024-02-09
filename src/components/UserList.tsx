import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import { getUserList } from '../components/services/action';

const UserList = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.reducer.userData)

	useEffect(() => {
		dispatch(getUserList())
	}, [])
	// console.warn("***", posts)
	return (
		<View style={styles.container}>
			{
				posts.length?
				posts.map((post) =>(<View>
					<Text style={{fontSize: 18}}>{post.title}</Text>
				</View>))
				:null
			}
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
})


export default UserList;