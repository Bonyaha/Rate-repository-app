import React from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from './FormikTextInput'


const validationSchema = yup.object().shape({
	username: yup
		.string()
		.required('Username is required'),
	password: yup
		.string()
		.required('Password is required'),
})

const styles = StyleSheet.create({
	button: {
		marginTop: 5,
		padding: 10,
		borderRadius: 5,
		backgroundColor: 'blue',
	},
	pressedButton: {
		backgroundColor: '#333',
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		textAlign: 'center',
		textTransform: 'uppercase',
	},
})


export const SignInContainer = ({ onSubmit }) => {
	return (
		<Formik
			initialValues={{ username: '', password: '' }}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ handleSubmit }) => (
				<View>
					<FormikTextInput name="username" placeholder="Username" />
					<FormikTextInput name="password" placeholder="Password" secureTextEntry />
					<Pressable
						style={({ pressed }) => [
							styles.button, pressed && styles.pressedButton
						]}
						onPress={handleSubmit}
					>
						<Text style={styles.buttonText}>Submit</Text>
					</Pressable>
				</View>
			)}
		</Formik>
	)
}