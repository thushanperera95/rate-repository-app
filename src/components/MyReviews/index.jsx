import { FlatList } from "react-native";
import useDeleteReviews from "../../hooks/useDeleteReview";
import useMyReviews from "../../hooks/useMyReviews"
import ItemSeparator from "../ItemSeperator";
import ReviewItem from "../SingleRepository/ReviewItem";
import Spinner from "../Spinner";

const MyReviews = () => {
  const { reviews, loading, fetchMore, refetch } = useMyReviews(4);
  const [handleDeleteReview] = useDeleteReviews();

  if (loading) {
    return <Spinner />
  }
  
  const onEndReach = () => {
    fetchMore();
  }

  const onReviewDelete = (id) => {
    handleDeleteReview({id})
    refetch()
  }

  const reviewNodes = reviews ? reviews.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} onReviewDelete={onReviewDelete} includeActions />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default MyReviews