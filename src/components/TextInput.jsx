import { TextInput as NativeTextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	input: {
		margin: 5,
		//borderWidth: 1,
		//borderColor: 'gray',
		padding: 10,
	},
	errorInput: {
		borderWidth: 1,
		borderColor: '#d73a4a',


	},
})

const TextInput = ({ style, error, secureTextEntry, ...props }) => {
	const textInputStyle = [
		styles.input,
		error && styles.errorInput,
		style
	]

	return <NativeTextInput style={textInputStyle} secureTextEntry={secureTextEntry} {...props} />
}

export default TextInput