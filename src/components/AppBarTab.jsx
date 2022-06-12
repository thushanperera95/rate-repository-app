import { Alert, Pressable, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  pressableTab: {
    flexGrow: 0,
    padding: 15,
  }
})

const AppBarTab = (props) => {
  const onPress = () => {
    Alert.alert(`You've pressed the ${props.children} tab!`)
  }

  return (
    <Pressable 
      style={styles.pressableTab} 
      onPress={onPress}>
      <Text 
        color="appBarTab" 
        fontWeight="bold" 
        fontSize="subheading">
          {props.children}
      </Text>
    </Pressable>
  )
}

export default AppBarTab