import { Platform } from 'react-native'

const theme = {
	colors: {
		textPrimary: '#24292e',
		textSecondary: 'grey',
		primary: '#0366d6',
	},
	fontSizes: {
		body: 14,
		subheading: 16,
	},
	fonts: {
		main: Platform.select({
			android: 'Roboto',
			ios: 'Arial',
			default: 'System', // Use System as a default font
		}),
	},
	fontWeights: {
		normal: '400',
		bold: '700',
	},
	container: {
		padding: 8,
		backgroundColor: 'white',
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 5,
	},
	separator: {
		height: 10,
		backgroundColor: 'grey',
	},

	/* from main */
	mainContainer: {
		backgroundColor: '#e1e4e8'
	},
	mainBackground: {
		backgroundColor: '#e1e4e8'
	},

}

export default theme