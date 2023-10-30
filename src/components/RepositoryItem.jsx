import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: 'white',
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 5,
	},
	title: {
		fontWeight: 'bold',
	},
	description: {
		color: 'gray',
	},
})

const RepositoryItem = ({ item }) => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
			<Text style={styles.title}>{item.fullName}</Text>
			<Text style={styles.description}>{item.description}</Text>
			<Text>Language: {item.language}</Text>
			<Text>Stars: {item.stargazersCount}</Text>
			<Text>Forks: {item.forksCount}</Text>
			<Text>Reviews: {item.reviewCount}</Text>
			<Text>Rating: {item.ratingAverage}</Text>
		</View>
	)
}

export default RepositoryItem
