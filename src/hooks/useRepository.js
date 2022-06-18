import { useQuery } from "@apollo/client"
import { useState } from "react"
import { GET_REPOSITORY } from "../graphql/queries"

const useRepository = (id) => {
  const [repository, setRepository] = useState()
  const [loading, setLoading] = useState(true)

  useQuery(GET_REPOSITORY, {
    variables: {id},
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setRepository(data.repository)
      setLoading(false)
    },
    onError: (error) => {
      throw new Error(error.message)
    }
  })

  return { repository, loading }
}

export default useRepository