import { FlatList } from "react-native"
import { useParams } from "react-router"

import useRepository from "../../hooks/useRepository"
import ItemSeparator from "../ItemSeperator"
import Spinner from "../Spinner"
import RepositoryInfo from "./RepositoryInfo"
import ReviewItem from "./ReviewItem"

const SingleRepository = () => {
  const { id } = useParams()
  const { repository, loading, fetchMore } = useRepository(id, 4)

  if (loading) {
    return <Spinner />
  }

  const reviews = repository?.reviews 
    ? repository.reviews.edges.map(edge => edge.node) 
    : [];

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={() => 
        <>
          <RepositoryInfo repository={repository} />
          <ItemSeparator />
        </>
      }
    />
  )
}

export default SingleRepository