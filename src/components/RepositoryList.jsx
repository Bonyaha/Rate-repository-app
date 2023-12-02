import React, { useState } from 'react'
import useRepositories from '../hooks/useRepositories'
import { useNavigate } from 'react-router-native'
import { RepositoryListContainer } from './RepositoryListContainer'

const RepositoryList = () => {
	//console.log('I am in RepoList')
	const [searchKeyword, setSearchKeyword] = useState('')
	const { repositories, refetch } = useRepositories({ searchKeyword })
	//console.log(repositories)
	const navigate = useNavigate()

	const handleSearch = (keyword) => {
		setSearchKeyword(keyword)
		refetch({ searchKeyword: keyword })
	}

	const handleRepositoryPress = (id) => {
		navigate(`/repositories/${id}`) // Navigate to SingleRepositoryView component
	}
	return <RepositoryListContainer
		handleRepositoryPress={handleRepositoryPress}
		repositories={repositories}
		refetch={refetch}
		onSearch={handleSearch}
	/>
}

export default RepositoryList