import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query GetRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection,$searchKeyword: String,$first: Int, $after: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection,searchKeyword: $searchKeyword,first: $first,after: $after) {
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
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`
export const GET_REPOSITORY = gql`
  query Repository($id: ID!,$first: Int, $after: String) {
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
      reviews(first: $first, after: $after){
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
        cursor
      }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`

export const GET_CURRENT_USER = gql`
query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
          id
          text
          rating
          createdAt
          repository {
              fullName
              id
            }
          }
        }
      }
    }
  }
`