import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useRepositories = ({ orderBy = 'CREATED_AT', orderDirection = 'DESC', searchKeyword }) => {
	console.log('in useRepositories hook')
	console.log({
		orderBy,
		orderDirection,
		searchKeyword
	})
	const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
		variables: {
			orderBy,
			orderDirection,
			searchKeyword
		},
		fetchPolicy: 'cache-and-network',
	})

	return { repositories: data?.repositories, loading, refetch }
}

export default useRepositories