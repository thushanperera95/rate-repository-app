import { Alert, Pressable, StyleSheet, Text } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  pressableTab: {
    flexGrow: 0,
    padding: 15,
  },
  text: {
    color: theme.colors.appBarTab,
    fontWeight: 'bold'
  }
})

const AppBarTab = (props) => {
  const onPress = () => {
    Alert.alert(`You've pressed the ${props.children} tab!`)
  }

  return (
    <Pressable style={styles.pressableTab} onPress={onPress}>
      <Text style={styles.text}>{props.children}</Text>
    </Pressable>
  )
}

export default AppBarTab