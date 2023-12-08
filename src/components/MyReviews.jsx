import React from 'react'
import useCurrentUser from '../hooks/useCurrentUser'
import { Text, Subheading } from './Text'
import theme from '../theme'
import ReviewItem from './ReviewItem'
import { View, FlatList } from 'react-native'

const ItemSeparator = () => <View style={theme.separator} />


const MyReviews = () => {
	const { currentUser, loading, error, refetch } = useCurrentUser(true)

	if (loading) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		)
	}

	if (error) {
		return (
			<View>
				<Text>Error: {error ? error.message : 'Reviews not found'}</Text>
			</View>
		)
	}


	console.log(currentUser)
	const reviews = currentUser.reviews.edges
	console.log(reviews)

	const hasReviews = reviews.length > 0

	if (!hasReviews) {
		return (
			<View>
				<Subheading fontWeight="bold">You have no reviews yet</Subheading>
			</View>
		)
	}


	return (
		<FlatList
			contentContainerStyle={{ paddingBottom: 95 }}
			data={reviews.map(edge => edge.node)}
			renderItem={({ item }) => <ReviewItem review={item} showActions={true} refetchReviews={refetch} />}
			keyExtractor={item => item.id}
			ItemSeparatorComponent={ItemSeparator}
		/>
	)
}
export default MyReviews
