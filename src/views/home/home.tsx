import styled from 'styled-components';

import { Card } from 'components/card';
import { SelectInput } from 'components/select-input';
import { useFilterAndSortParams } from 'hooks';
import { useArticles } from 'hooks/articles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 80rem;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;

  & > * {
    margin-left: 0.5rem;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > * {
    margin-bottom: 0.5rem;
  }
`;

export const Home = () => {
  const {
    sortParam,
    filterParam,
    onSortChange,
    onFilterChange,
  } = useFilterAndSortParams();

  const {
    articles,
    isLoading,
    hasError,
  } = useArticles({
    sortParam,
    filterParam,
  });

  console.log(articles);

  return (
    <Container>
      <Content>
        <FiltersContainer>
          <SelectInput
            title="Sort by"
            options={['Default', 'Newest', 'Oldest']}
            value={sortParam}
            onChange={onSortChange}
          />
          <SelectInput
            title="Data source"
            options={['All', 'Sports', 'Fashion']}
            value={filterParam}
            onChange={onFilterChange}
          />
        </FiltersContainer>
        <CardsContainer>
          {articles === undefined || isLoading ?
            <p>Loading...</p> :
            hasError ?
              <p>Something went wrong, please try again later</p> :
              articles.length === 0 ?
                <p>No articles found</p> :

                articles.map((article) => (
                  <Card
                    key={article.id}
                    title={article.title}
                    description={article.preamble || ''}
                    image={article.image}
                    date={article.date}
                  />
                ))}
        </CardsContainer>
      </Content>
    </Container>
  );
};
