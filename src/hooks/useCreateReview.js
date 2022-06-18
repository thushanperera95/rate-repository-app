import { useApolloClient, useMutation } from "@apollo/client/react/hooks"
import { CREATE_REVIEW } from "../graphql/mutations"

const useCreateReview = () => {
  const apolloClient = useApolloClient()

  const [createReview, result] = useMutation(CREATE_REVIEW)

  const createNewReview = async({repositoryOwnerName, repositoryName, rating, review}) => {
    const response = await createReview({ variables: { repositoryOwnerName, repositoryName, rating, review }});
    apolloClient.resetStore();
    return response.data.createReview;
  }

  return [createNewReview, result]
}

export default useCreateReview