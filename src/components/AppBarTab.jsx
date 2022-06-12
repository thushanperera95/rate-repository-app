import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const styles = StyleSheet.create({
  pressableTab: {
    flexGrow: 0,
    padding: 15,
  }
})

const AppBarTab = (props) => {
  return (
    <Pressable 
      style={styles.pressableTab}>
        <Link to={props.target}>
          <Text 
            color="appBarTab" 
            fontWeight="bold" 
            fontSize="subheading">
              {props.children}
          </Text>
        </Link>
    </Pressable>
  )
}

export default AppBarTab