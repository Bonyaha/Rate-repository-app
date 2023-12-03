import React, { useState, useEffect } from 'react'
import useRepositories from '../hooks/useRepositories'
import { useNavigate, useLocation } from 'react-router-native'
import { RepositoryListContainer } from './RepositoryListContainer'


const RepositoryList = () => {

	console.log('I am in RepoList')
	const [searchKeyword, setSearchKeyword] = useState('')
	console.log(searchKeyword)
	const { repositories, refetch } = useRepositories({ searchKeyword })
	const navigate = useNavigate()
	const location = useLocation()


	const handleSearch = (keyword) => {
		console.log('In handle search')
		setSearchKeyword(keyword)
		refetch({ searchKeyword: keyword })
	}

	const handleRepositoryPress = (id) => {
		navigate(`/repositories/${id}`)
	}

	useEffect(() => {
		if (location.pathname === '/') {
			setSearchKeyword('')
		}
	}, [location])

	return (
		<RepositoryListContainer
			handleRepositoryPress={handleRepositoryPress}
			repositories={repositories}
			refetch={refetch}
			onSearch={handleSearch}
		/>
	)
}

export default RepositoryList