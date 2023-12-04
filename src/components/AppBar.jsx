import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import { useApolloClient } from '@apollo/client'
import useCurrentUser from '../hooks/useCurrentUser'
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
	const { currentUser } = useCurrentUser()
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

				{currentUser ? (
					<>
						<Pressable style={styles.link} onPress={() => { }}>
							<View style={styles.tab}>
								<Link to="/review" component={View}>
									<Text style={styles.tabText}>Create a Review</Text>
								</Link>
							</View>
						</Pressable>
						<Pressable style={styles.link} onPress={() => { }}>
							<View style={styles.tab}>
								<Link to="/my-reviews" component={View}>
									<Text style={styles.tabText}>My reviews</Text>
								</Link>
							</View>
						</Pressable>
					</>
				) : null
				}
				<Pressable style={styles.link} onPress={() => { }}>
					<View style={styles.tab}>
						{currentUser ? (
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

				{currentUser ? null : (
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
