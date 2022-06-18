import { gql } from "@apollo/client/core";

export const AUTHENTICATE_USER = gql`
  mutation Authenticate($username: String!, $password: String!) {
    authenticate(credentials: {username: $username, password: $password}) {
      accessToken
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation CreateReview($repositoryOwnerName: String!, $repositoryName: String!, $rating: Int!, $review: String) {
    createReview(review: {ownerName: $repositoryOwnerName, repositoryName: $repositoryName, rating: $rating, text: $review}) {
      repositoryId
    }
  }
`