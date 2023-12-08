import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useRepositories = ({ orderBy = 'CREATED_AT', orderDirection = 'DESC', searchKeyword, first }) => {
	const { data, loading, fetchMore, refetch } = useQuery(GET_REPOSITORIES, {
		variables: {
			orderBy,
			orderDirection,
			searchKeyword,
			first
		},
		fetchPolicy: 'cache-and-network',
	})

	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage
		if (!canFetchMore) {
			return
		}

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