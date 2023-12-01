import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query GetRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          id
          name
          ownerName
          createdAt
          fullName
          reviewCount
          ratingAverage
          forksCount
          stargazersCount
          description
          language
          ownerAvatarUrl
        }
        cursor
      }
      totalCount
    }
  }
`
export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
      ownerAvatarUrl
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      reviews {
        edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
    }
  }
`

export const GET_ME = gql`
  {
    me {
      id
      username
    }
  }
`