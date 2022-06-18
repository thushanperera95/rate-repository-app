import { Alert, Pressable, StyleSheet, View } from "react-native"
import { useNavigate } from "react-router"
import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from "../FormikTextInput"
import Text from "../Text"
import theme from "../../theme"
import useCreateReview from "../../hooks/useCreateReview"

const initialValues = {
  repositoryOwnerName: '',
  repositoryName: '',
  rating: '',
  review: ''
}

const validationSchema = yup.object().shape({
  repositoryOwnerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository is required'),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .required('Rating is required'),
  review: yup
    .string()
    .optional()
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

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput 
        name="repositoryOwnerName" 
        placeholder="Repository owner name"
        style={styles.input} 
      />
      <FormikTextInput
        name="repositoryName" 
        placeholder="Repository name"
        style={styles.input} 
      />
      <FormikTextInput
        name="rating" 
        placeholder="Rating between 0 and 100"
        style={styles.input} 
      />
      <FormikTextInput
        name="review" 
        placeholder="Review"
        multiline={true}
        style={styles.input} 
      />
      <Pressable 
        style={styles.button} 
        onPress={onSubmit}
      >
        <Text style={styles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  )
}

const CreateReview = () => {
  const [createNewReview] = useCreateReview()
  const navigate = useNavigate();

  const onSubmit = async values => {
    const {
      repositoryOwnerName, 
      repositoryName, 
      rating, 
      review
    } = values

    try {
      const createdReview = await createNewReview({ 
        repositoryOwnerName, 
        repositoryName, 
        rating: Number(rating), 
        review 
      })
      
      navigate(`/${createdReview.repositoryId}`, { replace: true })
    } catch (e) {
      Alert.alert(e.message)
      console.log(e)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default CreateReview