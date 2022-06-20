import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import ItemSeparator from '../ItemSeperator';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  }
})

const Header = ({ sort, setSort, setSearchKeyword }) => {
  return (
    <View style={styles.container}>
      <ItemSeparator />
      <Picker
        selectedValue={sort}
        onValueChange={(value) => setSort(value)}
      >
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
    </View>
  )
}

const RepositoryListContainer = ({ repositories, onSingleRepositoryPress, sort, setSort, setSearchKeyword }) => {
  const repositoryNodes = repositories 
    ? repositories.edges.map(edge => edge.node) 
    : [];

  const renderItem = ({item}) => (
    <Pressable onPress={() => onSingleRepositoryPress(item.id)}>
      <RepositoryItem
        style={{zIndex: 5}} 
        item={item} 
        shouldDisplayRepositoryButton={false} 
      />
    </Pressable>
  )

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={<Header sort={sort} setSort={setSort} setSearchKeyword={setSearchKeyword} />}
      renderItem={renderItem}
      // other props
    />
  );
};

export default RepositoryListContainer;