import { View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import SignUp from './SignUp'
import AppBar from './AppBar'
import theme from '../theme'
import SingleRepositoryView from './SingleRepositoryView'
import Review from './Review'

const Main = () => {
	return (
		<View style={theme.mainContainer}>
			<AppBar />
			<Routes>
				<Route path="/" element={<RepositoryList />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />

				<Route path="*" element={<Navigate to="/" replace />} />
				<Route path="/repositories/:id" element={<SingleRepositoryView />} />
				<Route path="/review" element={<Review />} />

			</Routes>
		</View>
	)
}

export default Main