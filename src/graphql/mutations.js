import { gql } from '@apollo/client'

export const AUTHENTICATE_MUTATION = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`