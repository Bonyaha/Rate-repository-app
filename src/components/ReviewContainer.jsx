import React from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from './FormikTextInput'


const validationSchema = yup.object().shape({
	ownerName: yup.string().required('Owner username is required'),
	repositoryName: yup.string().required('Repository name is required'),
	rating: yup
		.number()
		.required('Rating is required')
		.min(0, 'Rating must be at least 0')
		.max(100, 'Rating cannot exceed 100'),
	text: yup.string(),
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

const initialValues = {
	ownerName: '',
	repositoryName: '',
	rating: null,
	text: '',
}

export const ReviewContainer = ({ onSubmit }) => {
	const handleFormSubmit = (values) => {
		// Convert the 'rating' field to a number
		const parsedValues = {
			...values,
			rating: parseInt(values.rating, 10),
		}

		onSubmit(parsedValues)
	}
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleFormSubmit}
			validationSchema={validationSchema}
		>
			{({ handleSubmit }) => (
				<View>
					<FormikTextInput name="ownerName" placeholder="Owner's GitHub Username" />
					<FormikTextInput name="repositoryName" placeholder="Repository Name" />

					<FormikTextInput name="rating" placeholder="Rating (0-100)" />

					<FormikTextInput name="text" placeholder="Review (optional)" multiline />

					<Pressable
						style={({ pressed }) => [
							styles.button, pressed && styles.pressedButton
						]}
						onPress={handleSubmit}
					>
						<Text style={styles.buttonText}>Submit Review</Text>
					</Pressable>
				</View>
			)}
		</Formik>
	)
}