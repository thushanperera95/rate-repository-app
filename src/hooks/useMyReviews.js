import { useQuery } from "@apollo/client"
import { ME } from "../graphql/queries"

const useMyReviews = (first) => {
  
  const variables = { first, includeReviews: true }
  const { data, loading, fetchMore, refetch, ...result } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    variables,
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;
    
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables
      }
    })
  }

  return {
    reviews: data?.me.reviews,
    loading,
    fetchMore: handleFetchMore,
    refetch,
    ...result
  }
}

export default useMyReviews