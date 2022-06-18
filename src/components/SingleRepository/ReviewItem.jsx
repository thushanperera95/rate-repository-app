import { StyleSheet, View } from "react-native"
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

import theme from "../../theme"
import BoldText from "../BoldText"
import Text from "../Text"

const headerStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexGrow: 1
  },
  ratingContainer: {
    flexGrow: 1,
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
    paddingTop: 5
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
        <Text style={headerStyle.createdAt}>{format(parseISO(createdAt), 'dd.mm.yyyy')}</Text>
        <Text style={headerStyle.reviewText}>{reviewText}</Text>
      </View>
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

const ReviewItem = ({ review }) => {
  return (
    <View style={reviewItemStyle.container}>
      <Header 
        username={review.user.username}
        createdAt={review.createdAt}
        rating={review.rating}
        reviewText={review.text}
      />
    </View>
  )
}

export default ReviewItem