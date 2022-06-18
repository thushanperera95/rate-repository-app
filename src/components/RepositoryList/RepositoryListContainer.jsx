import { FlatList, Pressable } from 'react-native';
import ItemSeparator from '../ItemSeperator';
import RepositoryItem from './RepositoryItem';

const RepositoryListContainer = ({ repositories, onSingleRepositoryPress }) => {
  const repositoryNodes = repositories 
    ? repositories.edges.map(edge => edge.node) 
    : [];

  const renderItem = ({item}) => (
    <Pressable onPress={() => onSingleRepositoryPress(item.id)}>
      <RepositoryItem 
        item={item} 
        shouldDisplayRepositoryButton={false} 
      />
    </Pressable>
  )

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      // other props
    />
  );
};

export default RepositoryListContainer;