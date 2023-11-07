import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import Constants from 'expo-constants'

const apolloUri = Constants.manifest.extra.apolloUri
const httpLink = createHttpLink({
	uri: apolloUri,
})

const createApolloClient = () => {
	return new ApolloClient({
		link: httpLink,
		cache: new InMemoryCache(),
	})
}

export default createApolloClient