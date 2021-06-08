import { ThemeProvider } from 'styled-components';
import Navbar from './components/navbar';
import theme from './theme';
import CategoryType from './CategoryType';
import { useState } from 'react';
import Pagination from './components/pagination';
import { moveToTopAnchor, TopAnchor } from './components/TopAnchor';
import { SimpleContainer } from './components/filter/FilterElements';
import Filter from './components/filter';
import { Deck } from './components/card/CardElements';
import cardsOrNotFound from './components/404-not-found/cardsOrNotFound';
import useInfo from './components/useInfo';

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
          jumpToFirst={() => setPage(1)}
          jumpToLast={() => setPage(numberOfPages)}
        />
      )}
    </>
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar onCategoryChange={handleCategoryChange} />
        <SimpleContainer>
          <Filter onValueChange={handleFilterChange} onReset={handleFilterReset} defaultText={category} />
          {pagination}
        </SimpleContainer>
        <TopAnchor />
        <Deck>{cardsOrNotFound(data, category)}</Deck>

        <SimpleContainer style={{ justifyContent: 'center' }}>{pagination}</SimpleContainer>
      </ThemeProvider>
    </>
  );
}
