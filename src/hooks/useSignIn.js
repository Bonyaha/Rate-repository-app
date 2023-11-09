import { useMutation, useApolloClient } from '@apollo/client'
import { AUTHENTICATE_MUTATION } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
	const authStorage = useAuthStorage()
	const apolloClient = useApolloClient()
	const [mutate, result] = useMutation(AUTHENTICATE_MUTATION)

	const signIn = async ({ username, password }) => {
		const response = await mutate({ variables: { credentials: { username, password } } })
		const accessToken = response.data.authenticate.accessToken
		await authStorage.setAccessToken(accessToken)
		console.log(response.data.authenticate.accessToken)

		await apolloClient.resetStore()
		return accessToken
	}

	return [signIn, result]
}
export default useSignIn