import { View, StyleSheet, Pressable, Text } from 'react-native'
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
				<Text style={theme.tabText}>Repositories</Text>
			</View>
		</Pressable>
	</View>
}

export default AppBar