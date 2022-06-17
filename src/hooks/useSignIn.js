import { useApolloClient, useMutation } from "@apollo/client/react/hooks"
import { AUTHENTICATE_USER } from "../graphql/mutations"
import useAuthStorage from "./useAuthStorage"

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const [authenticateUser, result] = useMutation(AUTHENTICATE_USER)

  const signIn = async({username, password}) => {
    const response = await authenticateUser({variables: {username, password}})
    await authStorage.setAccessToken(response.data.authenticate.accessToken);
    apolloClient.resetStore();
  }

  return [signIn, result]
}

export default useSignIn