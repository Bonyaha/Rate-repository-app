import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../graphql/queries'

const useCurrentUser = (includeReviews = false) => {
	const { data, loading, error, refetch } = useQuery(GET_CURRENT_USER, {
		variables: { includeReviews },
		fetchPolicy: 'cache-and-network',
	})

	return {
		currentUser: data ? data.me : null,
		loading,
		error,
		refetch
	}
}

export default useCurrentUser
