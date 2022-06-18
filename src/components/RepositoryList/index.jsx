import { useNavigate } from 'react-router';
import useRepositories from '../../hooks/useRepositories';
import Spinner from '../Spinner';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();
  const navigate = useNavigate();

  const onSingleRepositoryPress = (id) => {
    navigate(`/${id}`)
  }

  if (loading) {
    return <Spinner />
  }

  return <RepositoryListContainer repositories={repositories} onSingleRepositoryPress={onSingleRepositoryPress} />
};

export default RepositoryList;