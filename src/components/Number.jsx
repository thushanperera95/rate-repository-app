import Text from "./Text";

const RoundedNumber = ({...props}) => {
  const number = parseInt(props.children);
  const roundedNumber = Math.round(number / 100) / 10;
  const displayNumber = number > 1000 ? `${roundedNumber}k` : number;

  return (
    <Text {...props}>{displayNumber}</Text>
  )
}

export default RoundedNumber