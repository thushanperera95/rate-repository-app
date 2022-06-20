import { useState } from 'react';
import { useNavigate } from 'react-router';
import useRepositories from '../../hooks/useRepositories';
import Spinner from '../Spinner';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [sort, setSort] = useState("latest")
  const [searchKeyword, setSearchKeyword] = useState('')
  const { repositories, loading } = useRepositories(sort, searchKeyword);
  const navigate = useNavigate();

  const onSingleRepositoryPress = (id) => {
    navigate(`/${id}`)
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <RepositoryListContainer 
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