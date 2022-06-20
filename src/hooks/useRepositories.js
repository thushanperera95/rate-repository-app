import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client/react"

import { GET_REPOSITORIES } from "../graphql/queries"

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

const useRepositories = (sort) => {
  const [repositories, setRepositories] = useState()
  const [loading, setLoading] = useState(false)

  const [orderBy, orderDirection] = determineSortParameters(sort);

  const { data, error, queryLoading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy: orderBy, orderDirection: orderDirection }
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