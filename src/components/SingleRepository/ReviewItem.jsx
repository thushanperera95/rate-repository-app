import { Alert, Pressable, StyleSheet, View } from "react-native"
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

import theme from "../../theme"
import BoldText from "../BoldText"
import Text from "../Text"
import ItemSeparator from "../ItemSeperator"
import HorizontalItemSeparator from "../HorizontalItemSeperator"
import { useNavigate } from "react-router"

const headerStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexGrow: 1
  },
  ratingContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  rating: {
    color: theme.colors.primary,
    width: 45,
    height: 45,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 45 / 2,
    borderWidth: 2,
    borderColor: theme.colors.primary
  },
  infoContainer: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: "column",
  },
  createdAt: {
    flexGrow: 1,
    color: theme.colors.textAccentDark
  },
  reviewText: {
    paddingTop: 5,
  }
})

const Header = ({ username, createdAt, rating, reviewText }) => {
  return (
    <View style={headerStyle.container}>
      <View style={headerStyle.ratingContainer}>
        <BoldText style={headerStyle.rating}>{rating}</BoldText>
      </View>
      <View style={headerStyle.infoContainer}>
        <BoldText fontSize="subheading">{username}</BoldText>
        <Text style={headerStyle.createdAt}>{format(parseISO(createdAt), 'dd.MM.yyyy')}</Text>
        <Text style={headerStyle.reviewText}>{reviewText}</Text>
      </View>
    </View>
  )
}

const actionStyle = StyleSheet.create({
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewButton: {
    height: 50,
    borderRadius: theme.borderRadius,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    flexGrow: 1,
  },
  deleteButton: {
    backgroundColor: theme.colors.negativeBackground
  },
  buttonText: {
    color: theme.colors.appBarTabForeground,
    textAlign: 'center',
    fontWeight: theme.fontWeights.bold
  }
})

const Actions = ({ review, onReviewDelete }) => {
  const navigate = useNavigate();

  const onViewRepositoryClick = () => {
    navigate(`/${review.repositoryId}`)
  }

  const onDeleteReviewClick = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'DELETE',
          onPress: () => onReviewDelete(review.id)
        }
      ]
    )
  }

  return (
    <View style={actionStyle.actionContainer}>
      <Pressable 
        style={actionStyle.viewButton} 
        onPress={onViewRepositoryClick}
      >
        <Text style={actionStyle.buttonText}>View Repository</Text>
      </Pressable>
      <HorizontalItemSeparator />
      <Pressable 
        style={[actionStyle.viewButton, actionStyle.deleteButton]} 
        onPress={onDeleteReviewClick}
      >
        <Text style={actionStyle.buttonText}>Delete review</Text>
      </Pressable>
    </View>
  )
}

const reviewItemStyle = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: theme.colors.repositoryItemBackground,
    padding: 15,
    flexDirection: "column"
  }
})

const ReviewItem = ({ review, onReviewDelete, includeActions = false }) => {
  return (
    <View style={reviewItemStyle.container}>
      <Header 
        username={review.user.username}
        createdAt={review.createdAt}
        rating={review.rating}
        reviewText={review.text}
      />
      {includeActions && <>
        <ItemSeparator />
        <Actions review={review} onReviewDelete={onReviewDelete} />
      </>}
    </View>
  )
}

export default ReviewItem