import { gql } from "@apollo/client/core";
import { CORE_REPOSITORY_FIELDS } from "./fragments";

export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORY_FIELDS}
  query {
    repositories {
      edges {
        node {
          ...CoreRepositoryFields
        }
      }
    }
  }
`

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`

export const GET_REPOSITORY = gql`
  ${CORE_REPOSITORY_FIELDS}
  query Repository($id: ID!) {
    repository(id: $id) {
      ...CoreRepositoryFields
      url
    }
  }
`