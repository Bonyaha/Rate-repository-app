import { TextInput as NativeTextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	input: {
		margin: 5,
		borderWidth: 1,
		borderColor: 'gray',
		padding: 10,
	},
	errorInput: {
		borderWidth: 1,
		borderColor: '#d73a4a',
		padding: 10,
	},
})

const TextInput = ({ style, error, ...props }) => {
	const textInputStyle = [
		styles.input,
		error && styles.errorInput,
		style
	]

	return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput