import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text, Subheading } from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
	},
	leftContainer: {
		marginRight: 12,
	},
	rightContainer: {
		flex: 1,
	},
	descriptionContainer: {
		marginTop: 5,
		marginBottom: 12,
	},
	detailsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},

})

const RepositoryItem = ({ item, shouldFormat = true }) => {
	// Function to format numbers to thousands with one decimal and "k" suffix
	const formatNumber = (number) => {
		if (!shouldFormat) {
			return number.toString()
		}
		if (number >= 1000) {
			return (number / 1000).toFixed(1) + 'k'
		}
		return number.toString()
	}

	return (
		<View testID="repositoryItem" style={theme.container}>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<Image source={{ uri: item.ownerAvatarUrl }} style={theme.image} />
				</View>
				<View style={styles.rightContainer}>
					<Subheading fontWeight="bold">{item.fullName}</Subheading>
					<View style={styles.descriptionContainer}>
						<Text color="textSecondary">{item.description}</Text>
						<Text backgroundColor='primary'>{item.language}</Text>
					</View>
				</View>
			</View>
			<View style={styles.detailsContainer}>
				<View style={styles.detailItem}>
					<Text fontWeight='bold'>{formatNumber(item.stargazersCount)}</Text>
					<Text>Stars</Text>
				</View>
				<View style={styles.detailItem}>
					<Text fontWeight='bold'>{formatNumber(item.forksCount)}</Text>
					<Text>Forks</Text>
				</View>
				<View style={styles.detailItem}>
					<Text fontWeight='bold'>{formatNumber(item.reviewCount)}</Text>
					<Text>Reviews</Text>
				</View>
				<View style={styles.detailItem}>
					<Text fontWeight='bold'>{formatNumber(item.ratingAverage)}</Text>
					<Text>Rating</Text>
				</View>
			</View>
		</View>
	)
}

export default RepositoryItem
