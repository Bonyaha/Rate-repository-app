import React, { useState, useEffect, useRef } from 'react'
import { View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { useDebounce } from 'use-debounce'
import { useLocation } from 'react-router-native'
import { Picker } from '@react-native-picker/picker'

const RepositoryListHeader = ({ onSearch, refetch }) => {
	const [searchQuery, setSearchQuery] = useState('')
	const [debouncedSearchQuery] = useDebounce(searchQuery, 100)
	const [orderBy, setOrderBy] = useState('CREATED_AT')
	const location = useLocation()

	// Ref to the Searchbar component
	const searchbarRef = useRef(null)

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

	useEffect(() => {
		onSearch(debouncedSearchQuery)
		if (searchbarRef.current) {
			searchbarRef.current.blur() // Remove focus
		}
	}, [debouncedSearchQuery])

	useEffect(() => {
		if (location.pathname === '/') {
			setSearchQuery('')
		}
	}, [location])

	return (
		<>
			<Searchbar
				ref={searchbarRef}
				placeholder="Search repositories..."
				onChangeText={handleChange}
				value={searchQuery}
			/>
			<View style={{ padding: 10 }}>
				<Picker selectedValue={orderBy} onValueChange={handleOrderByChange}>
					<Picker.Item label="Select an item..." value="" enabled={false} />
					<Picker.Item label="Latest repositories" value="CREATED_AT" />
					<Picker.Item label="Highest rated repositories" value="RATING_AVERAGE_HIGHEST" />
					<Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE_LOWEST" />
				</Picker>
			</View>
		</>
	)
}

export default RepositoryListHeader

