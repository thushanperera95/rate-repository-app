import { gql } from "@apollo/client/core";
import { CORE_REPOSITORY_FIELDS, CORE_REVIEW_FIELDS, CORE_USER_FIELDS } from "./fragments";

export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORY_FIELDS}
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
  ${CORE_REVIEW_FIELDS}
  ${CORE_USER_FIELDS}
  query Repository($id: ID!) {
    repository(id: $id) {
      ...CoreRepositoryFields
      url
      reviews {
        edges {
          node {
            ...CoreReviewFields
            user {
              ...CoreUserFields
            }
          }
        }
      }
    }
  }
`