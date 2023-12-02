/* import React, { useState } from 'react'
import { FlatList, View, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'
import { useNavigate } from 'react-router-native'
import { Picker } from '@react-native-picker/picker'

const ItemSeparator = () => <View style={theme.separator} />

export const RepositoryListContainer = ({ repositories, refetch, shouldFormat, }) => {
	const navigate = useNavigate() // Get navigation object

	const [orderBy, setOrderBy] = useState('CREATED_AT')

	const handleRepositoryPress = (id) => {
		navigate(`/repositories/${id}`) // Navigate to SingleRepositoryView component
	}


	const handleOrderByChange = (itemValue) => {
		let newOrderDirection
		let newOrderByValue

		if (itemValue === 'RATING_AVERAGE_HIGHEST') {
			newOrderDirection = 'DESC'
			newOrderByValue = 'RATING_AVERAGE'
		} else if (itemValue === 'RATING_AVERAGE_LOWEST') {
			newOrderDirection = 'ASC'
			newOrderByValue = 'RATING_AVERAGE'
		} else {
			newOrderDirection = 'DESC'
			newOrderByValue = 'CREATED_AT'
		}

		setOrderBy(itemValue)
		console.log({ orderBy: newOrderByValue, orderDirection: newOrderDirection })
		refetch({ orderBy: newOrderByValue, orderDirection: newOrderDirection })
	}
	console.log(orderBy)

	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
		: []

	return (
		<FlatList
			contentContainerStyle={{ paddingBottom: 95 }}
			data={repositoryNodes}

			renderItem={({ item }) =>
				<Pressable onPress={() => handleRepositoryPress(item.id)}>
					<RepositoryItem item={item} shouldFormat={shouldFormat} />
				</Pressable>
			}

			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={ItemSeparator}

			ListHeaderComponent={
				<View style={{ padding: 10 }}>
					<Picker selectedValue={orderBy} onValueChange={handleOrderByChange}>
						<Picker.Item label="Select an item..." value="" enabled={false} />
						<Picker.Item label="Latest repositories" value="CREATED_AT" />
						<Picker.Item label="Highest rated repositories" value="RATING_AVERAGE_HIGHEST" />
						<Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE_LOWEST" />
					</Picker>
				</View>
			}
		/>
	)
} */

// RepositoryListContainer.js
import React /* { useEffect, useState } */ from 'react'
import { FlatList, View, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'
//import { useNavigate } from 'react-router-native'
//import { Picker } from '@react-native-picker/picker'
import RepositoryListHeader from './RepositoryListHeader' // Import the new header component


const ItemSeparator = () => <View style={theme.separator} />

export class RepositoryListContainer extends React.Component {

	renderHeader = () => {
		const { onSearch, refetch } = this.props

		return (
			<RepositoryListHeader
				onSearch={onSearch} // Pass the onSearch function to handle search
				refetch={refetch}
			/>
		)
	};


	render() {
		const { repositories, handleRepositoryPress, shouldFormat } = this.props
		const repositoryNodes = repositories
			? repositories.edges.map(edge => edge.node)
			: []

		return (
			<FlatList
				contentContainerStyle={{ paddingBottom: 95 }}
				data={repositoryNodes}

				renderItem={({ item }) =>
					<Pressable onPress={() => handleRepositoryPress(item.id)}>
						<RepositoryItem item={item} shouldFormat={shouldFormat} />
					</Pressable>
				}
				keyExtractor={(item) => item.id}
				ItemSeparatorComponent={ItemSeparator}
				ListHeaderComponent={this.renderHeader}
			/>
		)
	}
}

