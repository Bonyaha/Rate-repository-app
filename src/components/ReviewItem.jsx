import React from 'react'
import { View, Alert, Button, StyleSheet } from 'react-native'
import { format } from 'date-fns'
import { Text } from './Text'
import { useNavigate } from 'react-router-native'
import useDeleteReview from '../hooks/useDeleteReview'

const ReviewItem = ({ review, showActions = false, refetchReviews }) => {
	const formattedDate = format(new Date(review.createdAt), 'dd.MM.yyyy')
	const navigate = useNavigate()

	const { deleteReview } = useDeleteReview()

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
		buttonsContainer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginTop: 10,
		},
		roundedButton: {
			borderRadius: 5,
			overflow: 'hidden'
		},
		reviewHeader: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginBottom: 5,
		},
	})

	console.log(review)
	const handleViewRepository = () => {
		navigate(`/repositories/${review.repository.id}`)

	}

	const handleDeleteReview = () => {
		Alert.alert(
			'Delete Review',
			'Are you sure you want to delete this review?',
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{
					text: 'Delete',
					onPress: async () => {
						try {
							await deleteReview(review.id)
							refetchReviews()
						} catch (error) {
							console.error('Error deleting review:', error)
						}
					},
					style: 'destructive',
				},
			],
			{ cancelable: true }
		)
	}

	return (
		<View style={styles.container}>
			<View style={styles.ratingContainer}>
				<Text style={styles.ratingText}>{review.rating}</Text>
			</View>
			<View style={styles.reviewContainer}>
				<Text style={styles.username}>
					{showActions ? review.repository.fullName : review.user.username}
				</Text>
				<Text style={styles.date}>{formattedDate}</Text>
				<Text>{review.text}</Text>

				{showActions && (
					<View style={styles.buttonsContainer}>
						<View style={styles.roundedButton}>
							<Button title="View Repository" onPress={handleViewRepository} />
						</View>
						<View style={styles.roundedButton}>
							<Button title="Delete Review" onPress={handleDeleteReview} color="red" />
						</View>
					</View>
				)}
			</View>
		</View>


	)
}

export default ReviewItem
