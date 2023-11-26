import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import { useQuery, useApolloClient } from '@apollo/client'
import { GET_ME } from '../graphql/queries'

import useAuthStorage from '../hooks/useAuthStorage'

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: 'lightblue',
		flexDirection: 'row',
		paddingHorizontal: 1,
	},
	link: {
		paddingHorizontal: 1, // Add padding for spacing between links
	},
	tab: {
		backgroundColor: '#24292e',
		padding: 8,
		borderRadius: 5,
	},
	tabText: {
		color: 'white',
		fontSize: 16,
	},
})

const AppBar = () => {
	const { data } = useQuery(GET_ME)
	const authStorage = useAuthStorage()
	const apolloClient = useApolloClient()
	console.log(authStorage.getAccessToken())
	const handleSignOut = async () => {
		// Remove the access token from storage here
		await authStorage.removeAccessToken()
		// Reset the Apollo Client store
		apolloClient.resetStore()
	}

	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<Pressable style={styles.link} onPress={() => { }}>
					<View style={styles.tab}>
						<Link to="/" component={View}>
							<Text style={styles.tabText}>Repositories</Text>
						</Link>
					</View>
				</Pressable>

				{data?.me ? (
					<Pressable style={styles.link} onPress={() => { }}>
						<View style={styles.tab}>
							<Link to="/review" component={View}>
								<Text style={styles.tabText}>Create a Review</Text>
							</Link>
						</View>
					</Pressable>
				) : null
				}
				<Pressable style={styles.link} onPress={() => { }}>
					<View style={styles.tab}>
						{data?.me ? (
							<Text style={styles.tabText} onPress={handleSignOut}>
								Sign out
							</Text>
						)
							:
							(<Link to="/signin" component={View}>
								<Text style={styles.tabText}>Sign in</Text>
							</Link>
							)

						}
					</View>
				</Pressable>

				{data?.me ? null : (
					<Pressable style={styles.link} onPress={() => { }}>
						<View style={styles.tab}>
							<Link to="/signup" component={View}>
								<Text style={styles.tabText}>Sign up</Text>
							</Link>
						</View>
					</Pressable>
				)
				}

			</ScrollView>
		</View>
	)
}

export default AppBar
