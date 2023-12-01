import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useRepositories = ({ orderBy = 'CREATED_AT', orderDirection = 'DESC' }) => {

	const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
		variables: {
			orderBy,
			orderDirection,
		},
		fetchPolicy: 'cache-and-network',
	})

	return { repositories: data?.repositories, loading, refetch }
}

export default useRepositories