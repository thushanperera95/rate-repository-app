import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client/react"

import { GET_REPOSITORIES } from "../graphql/queries"

const useRepositories = () => {
  const [repositories, setRepositories] = useState()
  const [loading, setLoading] = useState(false)

  const { data, error, queryLoading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })

  useEffect(() => {
    if (error) {
      throw new Error(error.message)
    }

    if (queryLoading || !data) {
      setLoading(true)
    } else {
      setLoading(false)
      setRepositories(data.repositories)
    }
  }, [queryLoading, data, error])

  return {repositories, loading, refetch: refetch}
}

export default useRepositories