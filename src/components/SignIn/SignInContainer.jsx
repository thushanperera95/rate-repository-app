import { Pressable, StyleSheet, View } from "react-native"
import theme from "../../theme"
import FormikTextInput from "../FormikTextInput"
import { Formik } from 'formik'
import Text from "../Text"
import * as yup from 'yup'

const initialValues = {
  username: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
})

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

const SignInContainer = ({onSubmit}) => {
  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignInContainer