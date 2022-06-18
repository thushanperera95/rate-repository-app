import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

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