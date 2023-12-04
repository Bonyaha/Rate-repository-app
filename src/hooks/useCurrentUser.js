import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../graphql/queries'

const useCurrentUser = (includeReviews = false) => {
	const { data, loading, error } = useQuery(GET_CURRENT_USER, {
		variables: { includeReviews },
	})

	return {
		currentUser: data ? data.me : null,
		loading,
		error,
	}
}

export default useCurrentUser
