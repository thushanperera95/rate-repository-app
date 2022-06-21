import { useState } from 'react';
import { useNavigate } from 'react-router';
import useRepositories from '../../hooks/useRepositories';
import Spinner from '../Spinner';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [sort, setSort] = useState("latest")
  const [searchKeyword, setSearchKeyword] = useState('')
  const { repositories, loading, fetchMore } = useRepositories(sort, searchKeyword, 8);
  const navigate = useNavigate();

  const onSingleRepositoryPress = (id) => {
    navigate(`/${id}`)
  }

  const onEndReach = () => {
    fetchMore()
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <RepositoryListContainer 
      onEndReach={onEndReach}
      repositories={repositories} 
      onSingleRepositoryPress={onSingleRepositoryPress}
      sort={sort}
      setSort={setSort} 
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
    />
  )
};

export default RepositoryList;