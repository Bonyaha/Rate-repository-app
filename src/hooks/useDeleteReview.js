import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'

const useDeleteReview = () => {
	const [deleteReviewMutation] = useMutation(DELETE_REVIEW)

	const deleteReview = async (deleteReviewId) => {
		console.log(deleteReviewId)
		try {
			const { data } = await deleteReviewMutation({
				variables: {
					deleteReviewId,
				},
			})

			return data
		} catch (error) {
			console.error('Error deleting review:', error)
			throw new Error('Failed to delete review')
		}
	}

	return { deleteReview }
}

export default useDeleteReview
