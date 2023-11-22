import { View, StyleSheet } from 'react-native'
import { format } from 'date-fns'
import { Text } from './Text'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
		marginTop: 10,

	},
	ratingContainer: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: 'blue',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10,
	},
	ratingText: {
		color: 'white',
		fontWeight: 'bold',
	},
	reviewContainer: {
		flex: 1,
	},
	username: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	date: {
		fontSize: 14,
		color: 'gray',
	},
})


const ReviewItem = ({ review }) => {
	const formattedDate = format(new Date(review.createdAt), 'dd.MM.yyyy')

	return (
		<View style={styles.container}>
			<View style={styles.ratingContainer}>
				<Text style={styles.ratingText}>{review.rating}</Text>
			</View>
			<View style={styles.reviewContainer}>
				<Text style={styles.username}>{review.user.username}</Text>
				<Text style={styles.date}>{formattedDate}</Text>
				<Text>{review.text}</Text>
			</View>
		</View>
	)
}

export default ReviewItem