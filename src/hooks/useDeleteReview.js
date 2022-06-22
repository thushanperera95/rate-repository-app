import { useApolloClient, useMutation } from "@apollo/client"
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReviews = () => {
  const apolloClient = useApolloClient();

  const [deleteReview, result] = useMutation(DELETE_REVIEW)

  const handleDeleteReview = async ({ id }) => {
    await deleteReview({ variables: { id } });
    apolloClient.resetStore();
  }

  return [handleDeleteReview, result]
}

export default useDeleteReviews;