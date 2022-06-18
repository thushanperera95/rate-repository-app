import { ActivityIndicator, StyleSheet, View } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

const Spinner = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator 
        size="large" 
        color={theme.colors.appBarBackground} />
    </View>
  )
}

export default Spinner