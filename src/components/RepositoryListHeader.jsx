// RepositoryListHeader.js
import React, { useState, useEffect } from 'react'
import { View, TextInput } from 'react-native'
//import { Searchbar } from 'react-native-paper'
import { useDebounce } from 'use-debounce'
import { Picker } from '@react-native-picker/picker'

const RepositoryListHeader = ({ onSearch, refetch }) => {
	const [searchQuery, setSearchQuery] = useState('')
	const [debouncedSearchQuery] = useDebounce(searchQuery, 500)

	const [orderBy, setOrderBy] = useState('CREATED_AT')

	const handleChange = (query) => {
		setSearchQuery(query)
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
	// Trigger search on debounced value change
	useEffect(() => {
		onSearch(debouncedSearchQuery)
	}, [debouncedSearchQuery])

	return (
		<>
			<View style={{ padding: 10 }}>
				<Picker selectedValue={orderBy} onValueChange={handleOrderByChange}>
					<Picker.Item label="Select an item..." value="" enabled={false} />
					<Picker.Item label="Latest repositories" value="CREATED_AT" />
					<Picker.Item label="Highest rated repositories" value="RATING_AVERAGE_HIGHEST" />
					<Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE_LOWEST" />
				</Picker>
			</View>
			<TextInput
				placeholder="Search repositories..."
				onChangeText={handleChange}
				value={searchQuery}
			/>
		</>
	)
}

export default RepositoryListHeader
