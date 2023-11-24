import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'

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
			console.error('Error creating review:', error)
			throw new Error('Failed to create review')
		}
	}

	return [createReview, result]
}

export default useCreateReview
