import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = ({ id, first }) => {
	const { loading, error, data, fetchMore, ...rest } = useQuery(GET_REPOSITORY, {
		variables: { id, first },
		fetchPolicy: 'cache-and-network',
	})
	console.log(data?.repository.reviews.pageInfo)

	const handleFetchMore = () => {
		console.log('in handleFetchMore')
		const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage
		console.log(canFetchMore)
		if (!canFetchMore) {
			return
		}

		fetchMore({
			variables: {
				after: data.repository.reviews.pageInfo.endCursor,
				id,
				first
			},
		})
		console.log('fetching more repos')
	}

	return {
		loading,
		error,
		repository: data ? data.repository : null,
		fetchMore: handleFetchMore,
		...rest,
	}
}

export default useRepository
