import { StyleSheet, TextInput as NativeTextInput } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  default: {
    height: 50,
    padding: 10,
    borderColor: theme.colors.textInputBorderAccent,
    borderRadius: theme.borderRadius,
    borderWidth: 2,
  }
})

const TextInput = ({style, error, ...props}) => {
  const textInputStyle = [style, styles.default]

  return <NativeTextInput 
    style={textInputStyle} 
    placeholderTextColor={theme.colors.textInputAccent}
    {...props} 
  />
}

export default TextInput