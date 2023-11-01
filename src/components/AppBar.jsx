import { View, StyleSheet, Pressable, Text } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import theme from '../theme'

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
	},
	/* tab: {
		backgroundColor: '#24292e',
		padding: 12,
		alignItems: 'center',
	},
	tabText: {
		color: 'white',
		fontSize: 16,
	}, */
})

const AppBar = () => {
	return <View style={styles.container}>
		<Pressable onPress={() => { }}>
			<View style={theme.tab}>
				<Link to="/" component={View} style={theme.tabItem}>
					<Text style={theme.tabText}>Repositories</Text>
				</Link>
			</View>
		</Pressable>
		<Pressable onPress={() => { }}>
			<View style={theme.tab}>
				<Link to="/signin" component={View} style={theme.tabItem}>
					<Text style={theme.tabText}>Sign in</Text>
				</Link>
			</View>
		</Pressable>
	</View>
}

export default AppBar