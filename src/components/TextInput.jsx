import { StyleSheet, TextInput as NativeTextInput } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  default: {
    height: 50,
    padding: 10,
    borderRadius: theme.borderRadius,
    borderWidth: 2,
    justifyContent: 'center'
  },
  validBorderColor: {
    borderColor: theme.colors.textInputBorderAccent
  },
  errorBorderColor: {
    borderColor: theme.colors.textInputError
  }
})

const TextInput = ({style, error, ...props}) => {
  const textInputStyle = [style, styles.default, error ? styles.errorBorderColor : styles.validBorderColor]

  return <NativeTextInput 
    style={textInputStyle} 
    placeholderTextColor={theme.colors.textInputAccent}
    {...props} 
  />
}

export default TextInput