import { Pressable, StyleSheet } from "react-native";
import { useNavigate } from "react-router";
import Text from "../Text";

const styles = StyleSheet.create({
  pressableTab: {
    flexGrow: 0,
    padding: 15,
  }
})

const AppBarTab = (props) => {
  const navigate = useNavigate();

  const onLinkClick = () => {
    if (props.handler) {
      props.handler()
      navigate('/')
    } else {
      navigate(props.target, { replace: true })
    }
  }

  return (
    <Pressable 
      style={styles.pressableTab}
      onPress={onLinkClick}
    >
      <Text 
        color="appBarTab" 
        fontWeight="bold" 
        fontSize="subheading"
      >
        {props.children}
      </Text>
    </Pressable>
  )
}

export default AppBarTab