import React /* { useEffect, useState } */ from 'react'
import { FlatList, View, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'
import RepositoryListHeader from './RepositoryListHeader'


const ItemSeparator = () => <View style={theme.separator} />

export class RepositoryListContainer extends React.Component {

	renderHeader = () => {
		const { onSearch, refetch } = this.props

		return (
			<RepositoryListHeader
				onSearch={onSearch}
				refetch={refetch}
			/>
		)
	};


	render() {
		const { repositories, handleRepositoryPress, shouldFormat } = this.props
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
				ListHeaderComponent={this.renderHeader}
			/>
		)
	}
}

