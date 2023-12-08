import React, { useState, useEffect } from 'react'
import useRepositories from '../hooks/useRepositories'
import { useNavigate, useLocation } from 'react-router-native'
import { RepositoryListContainer } from './RepositoryListContainer'


const RepositoryList = () => {

	//console.log('I am in RepoList')
	const [searchKeyword, setSearchKeyword] = useState('')
	//console.log(searchKeyword)
	const { repositories, fetchMore, refetch } = useRepositories({
		first: 3, searchKeyword
	})
	const navigate = useNavigate()
	const location = useLocation()


	const handleSearch = (keyword) => {
		//console.log('In handle search')
		setSearchKeyword(keyword)
		refetch({ orderBy: 'CREATED_AT', orderDirection: 'DESC', searchKeyword: keyword })
	}

	const handleRepositoryPress = (id) => {
		navigate(`/repositories/${id}`)
	}

	useEffect(() => {
		if (location.pathname === '/') {
			setSearchKeyword('')
		}
	}, [location])

	const onEndReach = () => {
		//console.log('I am in onEndReach')
		fetchMore()
	}

	return (
		<RepositoryListContainer
			handleRepositoryPress={handleRepositoryPress}
			repositories={repositories}
			refetch={refetch}
			onSearch={handleSearch}
			onEndReach={onEndReach}
		/>
	)
}

export default RepositoryList