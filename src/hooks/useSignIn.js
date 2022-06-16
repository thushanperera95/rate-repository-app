import { useMutation } from "@apollo/client/react/hooks"
import { AUTHENTICATE_USER } from "../graphql/mutations"

const useSignIn = () => {
  const [authenticateUser, result] = useMutation(AUTHENTICATE_USER)

  const signIn = async({username, password}) => {
    const response = await authenticateUser({variables: {username, password}})
    return response
  }

  return [signIn, result]
}

export default useSignIn