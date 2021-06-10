import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { moveToTopAnchor, TopAnchor } from './components/TopAnchor';
import AppTheme from './constants/AppTheme';

import Navbar from './components/navbar';
import Pagination from './components/pagination';

import { SimpleContainer } from './components/filter/FilterElements';
import Filter from './components/filter';

import { Deck } from './components/card/CardElements';
import NotFound from './components/card/NotFoundCard';
import useCharactersData from './hooks/useCharactersData';
import CharacterCard from './components/card';

export const INVALID_PAGE = -1;
const INVALID_CARD_ID = -1;

export default function App() {
  const [activeCardId, setActiveCardId] = useState(INVALID_CARD_ID);
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
            id={item.id}
            active={item.id == activeCardId}
            onClick={e => {
              e.stopPropagation();
              setActiveCardId(activeCardId == item.id ? 0 : item.id);
            }}
            image={item.image || ''}
            name={item.name || ''}
            status={item.status || ''}
            species={item.species || ''}
            origin={item.origin ? item.origin.name : ''}
            lastKnownLocation={item.location ? item.location.name : ''}
            firstEpisodeUrl={item.episode[0]}
          />
        ))}
      </>
    );

  const resetActiveCardId = () => setActiveCardId(INVALID_CARD_ID);

  return (
    <>
      <ThemeProvider theme={AppTheme}>
        <Navbar />
        <SimpleContainer>
          <Filter onValueChange={handleFilterChange} onReset={handleFilterReset} defaultText={'Character'} />
          {pagination}
        </SimpleContainer>
        <TopAnchor />

        <Deck onClick={resetActiveCardId}>{cards}</Deck>

        <SimpleContainer style={{ justifyContent: 'center' }}>{pagination}</SimpleContainer>
      </ThemeProvider>
    </>
  );
}
