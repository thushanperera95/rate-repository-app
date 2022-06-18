import { Image, Linking, Pressable, StyleSheet, View } from "react-native"
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
    flexShrink: 1,
    flexDirection: "column",
  },
  description: {
    paddingTop: 10,
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

const bodyStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: 'space-around'
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: "center",
  }
})

const BodyItem = ({label, value}) => {
  return (
    <View style={bodyStyle.itemContainer}>
      <Number fontWeight="bold">{value}</Number>
      <Text>{label}</Text>
    </View>
  )
}

const Body = ({stars, forks, reviews, rating}) => {
  return (
    <View style={bodyStyle.container}>
      <BodyItem 
        label="Stars" 
        value={stars} />
      <BodyItem 
        label="Forks" 
        value={forks} />
      <BodyItem 
        label="Reviews" 
        value={reviews} />
      <BodyItem 
        label="Rating" 
        value={rating} />
    </View>
  )
}

const footerStyle = StyleSheet.create({
  button: {
    marginTop: 15,
    height: 50,
    borderRadius: theme.borderRadius,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center'
  },
  buttonText: {
    color: theme.colors.appBarTabForeground,
    textAlign: 'center',
    fontWeight: theme.fontWeights.bold
  }
})

const Footer = ({githubUrl}) => {
  const onSubmit = () => {
    Linking.openURL(githubUrl)
  }

  return (
    <Pressable style={footerStyle.button} onPress={onSubmit}>
        <Text style={footerStyle.buttonText}>Open in GitHub</Text>
    </Pressable>
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

const RepositoryItem = ({item, shouldDisplayRepositoryButton}) => {
  return (
    <View testID='repositoryItem' style={repositoryItemStyles.container}>
      <Header 
        fullName={item.fullName} 
        description={item.description} 
        avatarUrl={item.ownerAvatarUrl}
        language={item.language} />
      <Body
        stars={item.stargazersCount}
        forks={item.forksCount}
        reviews={item.reviewCount}
        rating={item.ratingAverage}
      />
      {shouldDisplayRepositoryButton &&
        <Footer
          githubUrl={item.url}
        />
      }
    </View>
  )
}

export default RepositoryItem