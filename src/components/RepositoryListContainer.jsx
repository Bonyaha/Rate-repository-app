import { FlatList, View, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'
import { useNavigate } from 'react-router-native'

const ItemSeparator = () => <View style={theme.separator} />

export const RepositoryListContainer = ({ repositories, shouldFormat }) => {
	const navigate = useNavigate() // Get navigation object

	const handleRepositoryPress = (id) => {
		navigate(`/repositories/${id}`) // Navigate to the repository details view
	}

	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
		: []
	return (
		<FlatList
			contentContainerStyle={{ paddingBottom: 95 }}
			data={repositoryNodes}

			renderItem={({ item }) =>
				<Pressable onPress={() => handleRepositoryPress(item.id)}>
					<RepositoryItem item={item} shouldFormat={shouldFormat} />
				</Pressable>
			}

			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={ItemSeparator}
		/>
	)
}