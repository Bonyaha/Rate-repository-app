import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'
const useRepositories = () => {
	/* const [repositories, setRepositories] = useState()
	const [loading, setLoading] = useState(false)

	const fetchRepositories = async () => {
		setLoading(true)

		const response = await fetch('http://192.168.0.102:5000/api/repositories')
		const json = await response.json()

		setLoading(false)
		setRepositories(json)
	}

	useEffect(() => {
		fetchRepositories()
	}, [])

	return { repositories, loading, refetch: fetchRepositories } */
	const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
	})

	return { repositories: data?.repositories, loading, refetch }
}

export default useRepositories