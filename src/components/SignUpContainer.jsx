import React from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from './FormikTextInput'


const validationSchema = yup.object().shape({
	username: yup
		.string()
		.required('Username is required')
		.min(5, 'Username must be at least 5 characters')
		.max(30, 'Username must be at most 30 characters'),
	password: yup
		.string()
		.required('Password is required')
		.min(5, 'Password must be at least 5 characters')
		.max(50, 'Password must be at most 50 characters'),
	confirmPassword: yup
		.string()
		.required('Password confirmation is required')
		.oneOf([yup.ref('password'), null], 'Passwords must match')
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


export const SignUpContainer = ({ onSubmit }) => {
	return (
		<Formik
			initialValues={{
				username: '',
				password: '',
				confirmPassword: ''
			}}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ handleSubmit }) => (
				<View>
					<FormikTextInput name="username" placeholder="Username" />
					<FormikTextInput name="password" placeholder="Password" secureTextEntry />
					<FormikTextInput name="confirmPassword" placeholder="Confirm Password" secureTextEntry />
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