import { FlatList, View } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'


const ItemSeparator = () => <View style={theme.separator} />

export const RepositoryListContainer = ({ repositories }) => {
	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
		: []

	return (
		<FlatList
			contentContainerStyle={{ paddingBottom: 95 }}
			data={repositoryNodes}
			renderItem={({ item }) => <RepositoryItem item={item} />}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={ItemSeparator}
		/>
	)
}