import { StyleSheet, View } from "react-native";
import Constants from 'expo-constants'
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    backgroundColor: theme.colors.appBarBackground
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab>Repositories</AppBarTab>
    </View>
  )
}

export default AppBar