import React from 'react'
import { View, Button, Linking, FlatList } from 'react-native'
import { useParams } from 'react-router-native'
import { useQuery } from '@apollo/client'

import RepositoryItem from './RepositoryItem'
import { GET_REPOSITORY } from '../graphql/queries'
import { Text, Subheading } from './Text'
import theme from '../theme'
import ReviewItem from './ReviewItem'

const ItemSeparator = () => <View style={theme.separator} />



const RepositoryInfo = ({ repository }) => {

	const handleOpenGitHub = async () => {
		if (repository && repository.url) {
			await Linking.openURL(repository.url)
		}
	}

	return (
		<View>
			<RepositoryItem item={repository} shouldFormat={true} />
			<Button title="Open in GitHub" onPress={handleOpenGitHub} />
		</View>
	)
}



const SingleRepositoryView = () => {
	const { id } = useParams()

	const { loading, error, data } = useQuery(GET_REPOSITORY, {
		variables: { id },
	})

	if (loading) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		)
	}

	if (error || !data || !data.repository) {
		return (
			<View>
				<Text>Error: {error ? error.message : 'Repository not found'}</Text>
			</View>
		)
	}

	const { repository } = data
	console.log(repository)

	// Check if there are reviews available
	const hasReviews = repository.reviews.edges.length > 0

	if (!hasReviews) {
		// If there are no reviews, render a message or any other UI element
		return (
			<View>
				<RepositoryInfo repository={repository} />
				<Subheading fontWeight="bold">No reviews available for this repository</Subheading>

			</View>
		)
	}


	return (
		<FlatList
			contentContainerStyle={{ paddingBottom: 95 }}
			ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
			data={repository.reviews.edges.map(edge => edge.node)}
			renderItem={({ item }) => <ReviewItem review={item} />}
			keyExtractor={item => item.id}
			ItemSeparatorComponent={ItemSeparator}
		/>
	)
}
export default SingleRepositoryView
