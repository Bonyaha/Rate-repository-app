import { Text as NativeText, StyleSheet } from 'react-native'

import theme from '../theme'


const styles = StyleSheet.create({
	text: {
		color: theme.colors.textPrimary,
		fontFamily: theme.fonts.main,
		fontSize: theme.fontSizes.body,
		fontWeight: theme.fontWeights.normal,
	},
	subheading: {
		color: theme.colors.textPrimary,
		fontFamily: theme.fonts.main,
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold,
	},
	colorPrimary: {
		color: theme.colors.primary,
	},
	colorTextSecondary: {
		color: theme.colors.textSecondary,
	},
	fontWeightBold: {
		fontWeight: theme.fontWeights.bold,
	},
	backgroundPrimary: {
		backgroundColor: theme.colors.primary,
		color: 'white',
		width: 'fit-content',
		borderRadius: 5,
		padding: 5,
	}
})

const Text = ({ color, backgroundColor, fontSize, fontWeight, style, ...props }) => {
	const textStyle = [
		styles.text,
		color === 'textSecondary' && styles.colorTextSecondary,
		color === 'primary' && styles.colorPrimary,
		backgroundColor === 'primary' && styles.backgroundPrimary,
		fontSize === 'subheading' && styles.fontSizeSubheading,
		fontWeight === 'bold' && styles.fontWeightBold,
		style,
	]

	return <NativeText style={textStyle} {...props} />
}

const Subheading = ({ style, ...props }) => {
	const subheadingStyle = [
		styles.subheading,
		style
	]
	return (
		<NativeText style={subheadingStyle} {...props} />
	)
}

export default {
	Text,
	Subheading,
}