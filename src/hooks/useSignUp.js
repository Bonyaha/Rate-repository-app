import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/mutations'
import useSignIn from './useSignIn'

const useSignUp = () => {
	const [mutate, result] = useMutation(CREATE_USER)
	const [signIn] = useSignIn()

	const signUp = async ({ username, password }) => {
		try {
			console.log(username)
			const response = await mutate({
				variables: { user: { username, password } }
			})
			console.log(response.data)
			if (response?.data?.createUser) {
				await signIn({ username, password })
			}
		}
		catch (error) {
			console.error('Error signing up:', error)
			throw error
		}

	}

	return [signUp, result]
}
export default useSignUp