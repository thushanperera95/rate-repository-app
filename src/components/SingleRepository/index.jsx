import { useQuery } from "@apollo/client/react"
import { useParams } from "react-router"
import { GET_REPOSITORY } from "../../graphql/queries"
import RepositoryItem from "../RepositoryList/RepositoryItem"
import Spinner from "../Spinner"

const SingleRepository = () => {
  const { id } = useParams()

  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: {id},
    fetchPolicy: 'cache-and-network'
  })

  if (!data && loading) {
    return <Spinner />
  }

  if (error) {
    throw new Error(error.message)
  }

  return (
    <>
      {data && !loading && 
        <RepositoryItem 
          item={data.repository} 
          shouldDisplayRepositoryButton={true} 
        />
      }
    </>
  )
}

export default SingleRepository