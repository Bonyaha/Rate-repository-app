import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (id) => {
	const { loading, error, data, ...rest } = useQuery(GET_REPOSITORY, {
		variables: { id },
		fetchPolicy: 'cache-and-network',
	})

	return {
		loading,
		error,
		repository: data ? data.repository : null,
		...rest,
	}
}

export default useRepository
