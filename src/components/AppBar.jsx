import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'

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
				<Pressable style={styles.link} onPress={() => { }}>
					<View style={styles.tab}>
						<Link to="/signin" component={View}>
							<Text style={styles.tabText}>Sign in</Text>
						</Link>
					</View>
				</Pressable>
			</ScrollView>
		</View>
	)
}

export default AppBar
