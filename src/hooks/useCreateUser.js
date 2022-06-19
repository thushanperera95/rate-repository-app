import { useApolloClient, useMutation } from "@apollo/client/react/hooks"
import { CREATE_USER } from "../graphql/mutations";

const useCreateUser = () => {
  const apolloClient = useApolloClient();

  const [createUser, result] = useMutation(CREATE_USER)

  const createNewUser = async ({username, password}) => {
    await createUser({ variables: { username, password }});
    apolloClient.resetStore();
  }

  return [createNewUser, result]
}

export default useCreateUser;