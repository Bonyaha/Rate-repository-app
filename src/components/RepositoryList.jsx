import useRepositories from '../hooks/useRepositories'
import { RepositoryListContainer } from './RepositoryListContainer'

const RepositoryList = () => {
	//console.log('I am in RepoList')
	const { repositories, refetch } = useRepositories({})
	//console.log(repositories)
	return <RepositoryListContainer
		repositories={repositories}
		refetch={refetch}
	/>
}

export default RepositoryList