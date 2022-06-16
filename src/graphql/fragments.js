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