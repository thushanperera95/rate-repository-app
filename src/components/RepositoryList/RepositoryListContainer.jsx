import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React from 'react'

import ItemSeparator from '../ItemSeperator';
import RepositoryItem from './RepositoryItem';
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  }
})

const Header = ({ sort, setSort, searchKeyword, setSearchKeyword }) => {
  return (
    <View style={styles.container}>
      <ItemSeparator />
      <Searchbar
        placeholder='Search'
        onChangeText={query => setSearchKeyword(query)}
        value={searchKeyword}
      />
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

export class RepositoryListContainer extends React.Component {
  keyExtractor = (item) => item.id

  renderHeader = () => {
    const props = this.props

    return (
      <Header 
        sort={props.sort} 
        setSort={props.setSort} 
        searchKeyword={props.searchKeyword} 
        setSearchKeyword={props.setSearchKeyword} />
    )
  }

  renderItem = ({item}) => {
    return (
      <Pressable onPress={() => this.props.onSingleRepositoryPress(item.id)}>
        <RepositoryItem
          item={item} 
          shouldDisplayRepositoryButton={false} 
        />
      </Pressable>
    )
  }

  render() {
    const repositoryNodes = this.props.repositories 
      ? this.props.repositories.edges.map(edge => edge.node) 
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={this.keyExtractor}
        ListHeaderComponent={this.renderHeader}
        renderItem={this.renderItem}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default RepositoryListContainer;