import React from 'react'
import { useNavigate } from 'react-router-native'

import useCreateReview from '../hooks/useCreateReview'
import { ReviewContainer } from './ReviewContainer'


const Review = () => {
	const [createReview] = useCreateReview()
	const navigate = useNavigate()

	const onSubmit = async (review) => {
		console.log(review)

		try {
			const response = await createReview(review)
			console.log(response.createReview.repositoryId)
			const repositoryId = response.createReview.repositoryId
			console.log(repositoryId)
			navigate(`/repositories/${repositoryId}`)
		} catch (e) {
			console.log(e)
		}
	}


	return (
		<ReviewContainer onSubmit={onSubmit} />
	)
}

export default Review
