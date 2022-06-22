import { ScrollView, StyleSheet, View } from "react-native";
import Constants from 'expo-constants'
import theme from "../../theme";
import AppBarTab from "./AppBarTab";
import { useApolloClient, useQuery } from "@apollo/client";
import { ME } from "../../graphql/queries";
import useAuthStorage from "../../hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    backgroundColor: theme.colors.appBarBackground
  },
})

const AppBar = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const response = useQuery(ME)

  const signOut = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore();
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab target="/">Repositories</AppBarTab>
        {response.data?.me && <AppBarTab target="/createreview">Create a review</AppBarTab>}
        {response.data?.me && <AppBarTab target="/myreviews">My reviews</AppBarTab>}
        {!response.data?.me && <AppBarTab target="/signin">Sign in</AppBarTab>}
        {!response.data?.me && <AppBarTab target="/signup">Sign up</AppBarTab>}
        {response.data?.me && <AppBarTab target="/" handler={signOut}>Sign out</AppBarTab>}
      </ScrollView>
    </View>
  )
}

export default AppBar