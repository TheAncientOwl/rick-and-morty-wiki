import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { moveToTopAnchor, TopAnchor } from './components/TopAnchor';
import AppTheme from './constants/AppTheme';

import Navbar from './components/navbar';
import Pagination from './components/pagination';

import { SimpleContainer } from './components/filter/FilterElements';
import Filter from './components/filter';

import { Deck } from './components/card/CardElements';
import NotFound from './components/card/404-not-found';
import useCharactersData from './hooks/useCharactersData';
import CharacterCard from './components/card/CharacterCard';

export const INVALID_PAGE = -1;

export default function App() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [data, numberOfPages] = useCharactersData({ page: page, name: filter });

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
        <Navbar />
        <SimpleContainer>
          <Filter onValueChange={handleFilterChange} onReset={handleFilterReset} defaultText={'Character'} />
          {pagination}
        </SimpleContainer>
        <TopAnchor />

        <Deck>{cards}</Deck>

        <SimpleContainer style={{ justifyContent: 'center' }}>{pagination}</SimpleContainer>
      </ThemeProvider>
    </>
  );
}
