import { Text as NativeText, StyleSheet } from 'react-native'

import theme from '../theme'


const baseTextStyle = {
	fontFamily: theme.fonts.main,
	color: theme.colors.textPrimary,
}

const styles = StyleSheet.create({
	text: {
		...baseTextStyle,
		fontSize: theme.fontSizes.body,
		fontWeight: theme.fontWeights.normal,
	},
	subheading: {
		...baseTextStyle,
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold,
	},
	colorPrimary: {
		color: theme.colors.primary,
	},
	colorTextSecondary: {
		color: theme.colors.textSecondary,
	},
})

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
	const textStyle = [
		styles.text,
		color === 'textSecondary' && styles.colorTextSecondary,
		color === 'primary' && styles.colorPrimary,
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