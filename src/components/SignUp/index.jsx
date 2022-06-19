import { useNavigate } from 'react-router'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Alert, Pressable, StyleSheet, View } from 'react-native'
import FormikTextInput from '../FormikTextInput'
import Text from '../Text'
import theme from '../../theme'
import useCreateUser from '../../hooks/useCreateUser'
import useSignIn from '../../hooks/useSignIn'

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be between 1 and 30 characters long')
    .max(30, 'Username must be between 1 and 30 characters long')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be between 5 and 50 characters long')
    .max(50, 'Password must be between 5 and 50 characters long')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match")
    .required('Password confirmation is required')
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

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput 
        style={styles.input} 
        name="username" 
        placeholder="Username"  
      />
      <FormikTextInput 
        style={styles.input} 
        name="password" 
        placeholder="Password" 
        secureTextEntry={true} 
      />
      <FormikTextInput 
        style={styles.input} 
        name="passwordConfirmation" 
        placeholder="Password confirmation" 
        secureTextEntry={true} 
      />
      <Pressable 
        style={styles.button} 
        onPress={onSubmit}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  )
}

const SignUp = () => {
  const navigate = useNavigate()
  const [createNewUser] = useCreateUser();
  const [signIn] = useSignIn();

  const onSubmit = async values => {
    const { username, password } = values;

    try {
      await createNewUser({username, password});
      await signIn({username, password});

      navigate('/', { replace: true })
    } catch (e) {
      console.error(e)
      Alert.alert(e.message)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignUp