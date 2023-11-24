import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations' // Import your CREATE_REVIEW mutation

const useCreateReview = () => {
	const [mutate, result] = useMutation(CREATE_REVIEW)

	const createReview = async (review) => {
		try {
			console.log('test')
			console.log(review)
			console.log(typeof (review.rating))

			const { data } = await mutate({ variables: { review } })
			console.log(data)
			return data
		} catch (error) {
			// Handle error, log, or throw if needed
			console.error('Error creating review:', error)
			throw new Error('Failed to create review')
		}
	}

	return [createReview, result]
}

export default useCreateReview
