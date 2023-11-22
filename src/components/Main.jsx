import { View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import AppBar from './AppBar'
import theme from '../theme'
import SingleRepositoryView from './SingleRepositoryView'
const Main = () => {
	return (
		<View style={theme.mainContainer}>
			<AppBar />
			<Routes>
				<Route path="/" element={<RepositoryList />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="*" element={<Navigate to="/" replace />} />
				<Route path="/repositories/:id" element={<SingleRepositoryView />} />
			</Routes>
		</View>
	)
}

export default Main