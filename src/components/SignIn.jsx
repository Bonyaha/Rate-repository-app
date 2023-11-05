import React from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { Formik } from 'formik'

import FormikTextInput from './FormikTextInput'

const styles = StyleSheet.create({
	button: {
		marginTop: 10,
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
	const onSubmit = (values) => {
		console.log(values)
	}

	return (
		<Formik
			initialValues={{ username: '', password: '' }}
			onSubmit={onSubmit}
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
