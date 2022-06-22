import { gql } from "@apollo/client/core";
import { CORE_REPOSITORY_FIELDS, CORE_REVIEW_FIELDS, CORE_USER_FIELDS } from "./fragments";

export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORY_FIELDS}
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
      edges {
        node {
          ...CoreRepositoryFields
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
`

export const ME = gql`
  ${CORE_REVIEW_FIELDS}
  ${CORE_USER_FIELDS}
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...CoreReviewFields
            user {
              ...CoreUserFields
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

export const GET_REPOSITORY = gql`
  ${CORE_REPOSITORY_FIELDS}
  ${CORE_REVIEW_FIELDS}
  ${CORE_USER_FIELDS}
  query Repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...CoreRepositoryFields
      url
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...CoreReviewFields
            user {
              ...CoreUserFields
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