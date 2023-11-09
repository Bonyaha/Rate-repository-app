import React from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-native'
import FormikTextInput from './FormikTextInput'
import useSignIn from '../hooks/useSignIn'

const validationSchema = yup.object().shape({
	username: yup
		.string()
		/* .min(1, 'Weight must be greater or equal to 1') */
		.required('Username is required'),
	password: yup
		.string() // Accept both string and number
		/* .min(0.5, 'Height must be greater or equal to 0.5') */
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

const SignIn = () => {
	const [signIn] = useSignIn()
	const navigate = useNavigate()
	const onSubmit = async (values) => {
		const { username, password } = values

		try {
			await signIn({ username, password })
			navigate('/')
		} catch (e) {
			console.log(e)
		}
	}

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

export default SignIn
