import { /* StyleSheet, */ View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import theme from '../theme'

/* const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
	},
}) */

const Main = () => {
	return (
		<View style={theme.mainContainer}>
			<AppBar />
			<RepositoryList />
		</View>
	)
}

export default Main