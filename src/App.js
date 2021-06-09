import { ThemeProvider } from 'styled-components';
import Navbar from './components/navbar';
import AppTheme from './constants/AppTheme';
import CategoryType from './constants/CategoryType';
import { useState } from 'react';
import Pagination from './components/pagination';
import { moveToTopAnchor, TopAnchor } from './components/TopAnchor';
import { SimpleContainer } from './components/filter/FilterElements';
import Filter from './components/filter';
import { Deck } from './components/card/CardElements';
import useInfo from './hooks/useInfo';
import NotFound from './components/card/404-not-found';
import CharacterCard from './components/card/CharacterCard';

export const INVALID_PAGE = -1;

export default function App() {
  const [category, setCategory] = useState(CategoryType.character);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [data, numberOfPages] = useInfo(category, { page: page, name: filter });

  const handleCategoryChange = newCategory => {
    setCategory(newCategory);
    setPage(1);
    setFilter('');
  };

  const handleFilterChange = value => {
    setPage(INVALID_PAGE);
    setFilter(value);
  };

  const handleFilterReset = () => {
    setPage(1);
    setFilter('');
  };

  const pagination = (
    <>
      {page != -1 && (
        <Pagination
          currentPage={page}
          pages={numberOfPages}
          onPrevClick={() => {
            setPage(Math.max(1, page - 1));
            moveToTopAnchor();
          }}
          onNextClick={() => {
            setPage(Math.min(numberOfPages, page + 1));
            moveToTopAnchor();
          }}
          jumpToFirst={() => {
            setPage(1);
            moveToTopAnchor();
          }}
          jumpToLast={() => {
            setPage(numberOfPages);
            moveToTopAnchor();
          }}
        />
      )}
    </>
  );

  const cards =
    data.length == 0 ? (
      <NotFound />
    ) : (
      <>
        {data.map((item, index) => (
          <CharacterCard
            key={index}
            image={item.image || ''}
            name={item.name || ''}
            status={item.status || ''}
            species={item.species || ''}
            lastKnownLocation={item.location ? item.location.name : ''}
          />
        ))}
      </>
    );

  return (
    <>
      <ThemeProvider theme={AppTheme}>
        <Navbar onCategoryChange={handleCategoryChange} />
        <SimpleContainer>
          <Filter onValueChange={handleFilterChange} onReset={handleFilterReset} defaultText={category} />
          {pagination}
        </SimpleContainer>
        <TopAnchor />
        <Deck>{cards}</Deck>

        <SimpleContainer style={{ justifyContent: 'center' }}>{pagination}</SimpleContainer>
      </ThemeProvider>
    </>
  );
}
