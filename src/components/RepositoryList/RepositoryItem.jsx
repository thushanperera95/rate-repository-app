import { Image, StyleSheet, View } from "react-native"
import theme from "../../theme"
import BoldText from "../BoldText"
import Number from "../Number"
import Text from "../Text"

const headerStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexGrow: 1
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: theme.borderRadius
  },
  imageContainer: {
    flexGrow: 0,
    paddingRight: 15
  },
  infoContainer: {
    flexGrow: 1,
    flexDirection: "column",
  },
  description: {
    paddingTop: 10
  },
  languageContainer: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 15
  },
  langauge: {
    borderRadius: theme.borderRadius,
    backgroundColor: theme.colors.primary,
    padding: 6,
    flexGrow: 0,
    color: "white",
    overflow: "hidden"
  }
})

const Header = ({fullName, description, avatarUrl, language}) => {
  return (
    <View style={headerStyle.container}>
      <View style={headerStyle.imageContainer}>
        <Image 
          style={headerStyle.avatar} 
          source={{uri: avatarUrl}} />
      </View>
      <View style={headerStyle.infoContainer}>
        <BoldText fontSize="subheading">{fullName}</BoldText>
        <Text style={headerStyle.description}>{description}</Text>
        <View style={headerStyle.languageContainer}>
          <Text style={headerStyle.langauge}>{language}</Text>
        </View>
      </View>
    </View>
  )
}

const footerStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: 'space-around'
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: "center"
  }
})

const FooterItem = ({label, value}) => {
  return (
    <View style={footerStyle.itemContainer}>
      <Number fontWeight="bold">{value}</Number>
      <Text>{label}</Text>
    </View>
  )
}

const Footer = ({stars, forks, reviews, rating}) => {
  return (
    <View style={footerStyle.container}>
      <FooterItem 
        label="Stars" 
        value={stars} />
      <FooterItem 
        label="Forks" 
        value={forks} />
      <FooterItem 
        label="Reviews" 
        value={reviews} />
      <FooterItem 
        label="Rating" 
        value={rating} />
    </View>
  )
}

const repositoryItemStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: theme.colors.repositoryItemBackground,
    padding: 15,
    flexDirection: "column"
  }
})

const RepositoryItem = ({item}) => {
  return (
    <View style={repositoryItemStyles.container}>
      <Header 
        fullName={item.fullName} 
        description={item.description} 
        avatarUrl={item.ownerAvatarUrl}
        language={item.language} />
      <Footer
        stars={item.stargazersCount}
        forks={item.forksCount}
        reviews={item.reviewCount}
        rating={item.ratingAverage}
      />
    </View>
  )
}

export default RepositoryItem