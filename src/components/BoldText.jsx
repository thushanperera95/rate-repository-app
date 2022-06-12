import Text from "./Text"

const BoldText = ({...props}) => {
  return (
    <Text fontWeight="bold" {...props} />
  )
}

export default BoldText