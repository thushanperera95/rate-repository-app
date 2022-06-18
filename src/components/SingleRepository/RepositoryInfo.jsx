import RepositoryItem from "../RepositoryList/RepositoryItem"

const RepositoryInfo = ({repository}) => {
  return (
    <RepositoryItem 
      item={repository} 
      shouldDisplayRepositoryButton={true} 
    />
  )
}

export default RepositoryInfo