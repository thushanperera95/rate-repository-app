import { render } from '@testing-library/react-native';
import RepositoryItem from '../../../components/RepositoryList/RepositoryItem';

describe('RepositoryItem', () => {
  it('displays open github button if passed in shouldDisplayRepositoryButton boolean is set to true', () => {
    const repository = {
      id: 'jaredpalmer.formik',
      fullName: 'jaredpalmer/formik',
      description: 'Build forms in React, without the tears',
      language: 'TypeScript',
      forksCount: 1619,
      stargazersCount: 21856,
      ratingAverage: 88,
      reviewCount: 3,
      ownerAvatarUrl:
        'https://avatars2.githubusercontent.com/u/4060187?v=4',
      url: 'www.google.com'
    };

    const { getByText } = render(<RepositoryItem item={repository} shouldDisplayRepositoryButton={true} />)

    expect(getByText('jaredpalmer/formik')).toBeDefined()
    expect(getByText('Build forms in React, without the tears')).toBeDefined()
    expect(getByText('TypeScript')).toBeDefined()
    expect(getByText('21.9k')).toBeDefined()
    expect(getByText('88')).toBeDefined()
    expect(getByText('3')).toBeDefined()
    expect(getByText('Open in GitHub')).toBeDefined()
  })

  it('does not display open github button if passed in shouldDisplayRepositoryButton boolean is set to false', () => {
    const repository = {
      id: 'jaredpalmer.formik',
      fullName: 'jaredpalmer/formik',
      description: 'Build forms in React, without the tears',
      language: 'TypeScript',
      forksCount: 1619,
      stargazersCount: 21856,
      ratingAverage: 88,
      reviewCount: 3,
      ownerAvatarUrl:
        'https://avatars2.githubusercontent.com/u/4060187?v=4',
      url: 'www.google.com'
    };

    const { getByText, queryByText } = render(<RepositoryItem item={repository} shouldDisplayRepositoryButton={false} />)

    expect(getByText('jaredpalmer/formik')).toBeDefined()
    expect(getByText('Build forms in React, without the tears')).toBeDefined()
    expect(getByText('TypeScript')).toBeDefined()
    expect(getByText('21.9k')).toBeDefined()
    expect(getByText('88')).toBeDefined()
    expect(getByText('3')).toBeDefined()
    expect(queryByText('Open in GitHub')).toBeNull()
  })
})