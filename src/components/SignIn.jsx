import { Pressable, StyleSheet, View } from "react-native"
import FormikTextInput from "./FormikTextInput"
import Text from "./Text"
import { Formik } from 'formik'
import theme from "../theme"

const initialValues = {
  username: '',
  password: ''
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 15,
    backgroundColor: theme.colors.textInputBackground,
  },
  input: {
    marginBottom: 10
  },
  button: {
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

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.input} name="username" placeholder="Username"  />
      <FormikTextInput style={styles.input} name="password" placeholder="Password" secureTextEntry={true} />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  const onSubmit = values => {
    console.log(values)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn