import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import { Text } from './Text'

const styles = StyleSheet.create({
	errorText: {
		marginTop: 5,
	},
})

const FormikTextInput = ({ name, ...props }) => {
	const [field, meta, helpers] = useField(name)
	// Check if the field is touched and the error message is present
	const showError = meta.touched && meta.error
	console.log(meta.error)
	console.log(showError)
	return (
		<>
			<TextInput
				onChangeText={value => helpers.setValue(value)}
				onBlur={() => helpers.setTouched(true)}
				value={field.value}
				error={showError}
				{...props}
			/>
			{showError && <Text style={styles.errorText}>{meta.error}</Text>}
		</>
	)
}

export default FormikTextInput