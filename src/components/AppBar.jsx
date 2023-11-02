import { View, StyleSheet, Pressable, Text } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: 'red',
	},
	tab: {
		backgroundColor: '#24292e',
		padding: 12,
	},
	tabText: {
		color: 'white',
		fontSize: 16,
	},
})

const AppBar = () => {
	return (
		<View style={styles.container}>
			<Pressable onPress={() => { }}>
				<View style={styles.tab}>
					<Link to="/" component={View}>
						<Text style={styles.tabText}>Repositories</Text>
					</Link>
				</View>
			</Pressable>
			<Pressable onPress={() => { }}>
				<View style={styles.tab}>
					<Link to="/signin" component={View}>
						<Text style={styles.tabText}>Sign in</Text>
					</Link>
				</View>
			</Pressable>
		</View>
	)
}

export default AppBar
