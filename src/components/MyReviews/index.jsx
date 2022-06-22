import { FlatList } from "react-native";
import useMyReviews from "../../hooks/useMyReviews"
import ItemSeparator from "../ItemSeperator";
import ReviewItem from "../SingleRepository/ReviewItem";
import Spinner from "../Spinner";

const MyReviews = () => {
  const { reviews, loading, fetchMore } = useMyReviews(4);

  if (loading) {
    return <Spinner />
  }
  
  const onEndReach = () => {
    fetchMore();
  }

  const reviewNodes = reviews ? reviews.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default MyReviews