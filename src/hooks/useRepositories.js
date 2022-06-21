import { useQuery } from "@apollo/client/react"

import { GET_REPOSITORIES } from "../graphql/queries"
import { useDebounce } from "use-debounce";

const determineSortParameters = (sort) => {
  let orderDirection;
  let orderBy;

  switch(sort) {
    case 'latest':
      orderDirection = 'DESC';
      orderBy = 'CREATED_AT';
      break;
    case 'highest':
      orderDirection = 'DESC';
      orderBy = 'RATING_AVERAGE';
      break;
    case 'lowest':
      orderDirection = 'ASC';
      orderBy = 'RATING_AVERAGE';
      break;
  }

  return [orderBy, orderDirection]
}

const useRepositories = (sort, searchKeyword, first) => {
  const [searchKeywordDebounced] = useDebounce(searchKeyword, 500);
  const [orderBy, orderDirection] = determineSortParameters(sort);

  const variables = { 
    orderBy, 
    orderDirection, 
    searchKeyword: searchKeywordDebounced,
    first
  }
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderBy: orderBy, 
        orderDirection: orderDirection, 
        searchKeyword: searchKeywordDebounced,
        first: first
      }
    })
  }

  return {
    repositories: data?.repositories, 
    loading, 
    fetchMore: handleFetchMore,
    ...result
  }
}

export default useRepositories