import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useRepositories = ({ orderBy = 'CREATED_AT', orderDirection = 'DESC', searchKeyword, first }) => {
	//console.log('in useRepositories hook')
	/* console.log({
		orderBy,
		orderDirection,
		searchKeyword
	}) */
	const { data, loading, fetchMore, refetch } = useQuery(GET_REPOSITORIES, {
		variables: {
			orderBy,
			orderDirection,
			searchKeyword,
			first
		},
		fetchPolicy: 'cache-and-network',
	})
	//console.log(data)
	//console.log(fetchMore)
	//console.log(data.repositories.pageInfo.endCursor)

	const handleFetchMore = () => {
		console.log('in handleFetchMore')
		const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage
		console.log(canFetchMore)
		if (!canFetchMore) {
			return
		}
		console.log(data.repositories)
		console.log(data.repositories.pageInfo.endCursor)
		fetchMore({
			variables: {
				after: data.repositories.pageInfo.endCursor,
				orderBy,
				orderDirection,
				searchKeyword,
				first
			},
		})
	}

	return {
		repositories: data?.repositories,
		loading,
		fetchMore: handleFetchMore,
		refetch
	}
}

export default useRepositories