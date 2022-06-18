import { gql } from "@apollo/client/core"

export const CORE_REPOSITORY_FIELDS = gql`
  fragment CoreRepositoryFields on Repository {
    fullName
    description
    language
    ownerAvatarUrl
    stargazersCount
    reviewCount
    forksCount
    ratingAverage
    id
  }
`

export const CORE_USER_FIELDS = gql`
  fragment CoreUserFields on User {
    id
    username
  }
`

export const CORE_REVIEW_FIELDS = gql`
  fragment CoreReviewFields on Review {
    id
    text
    rating
    createdAt
  }
`