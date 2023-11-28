import { StyleSheet, Pressable, View } from 'react-native'
import { useField } from 'formik'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import TextInput from './TextInput'
import { Text } from './Text'

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		width: '100%',
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 4,
		borderColor: '#d7d7d7'
	},
	inputContainer: {
		flex: 1,
		backgroundColor: '#F5EEDC',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 5
	},
	input: {
		width: '100%',
		padding: 10,
		fontSize: 22,

	},
	icon: {
		position: 'absolute',
		right: 10,
	},
	errorText: {
		color: '#d73a4a',
		fontWeight: '700',
		marginTop: 5,
	}
})

const FormikTextInput = ({ name, secureTextEntry, handlePasswordVisibility, rightIcon, ...props }) => {
	const [field, meta, helpers] = useField(name)
	// Check if the field is touched and the error message is present
	const showError = meta.touched && meta.error


	return (
		<>
			< View style={styles.container} >
				<View style={styles.inputContainer}>
					<TextInput
						onChangeText={value => helpers.setValue(value)}
						onBlur={() => helpers.setTouched(true)}
						value={field.value}
						error={showError}
						secureTextEntry={secureTextEntry}
						style={styles.input}
						{...props}
					/>

					<Pressable style={styles.icon} onPress={handlePasswordVisibility}>

						<MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />

					</Pressable>
				</View>


			</View>
			{showError && <Text style={styles.errorText}>{meta.error}</Text>}
		</>
	)
}

export default FormikTextInput