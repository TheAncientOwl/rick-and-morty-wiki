import { useState, useEffect } from 'react';
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
import NextPrevCard from './components/next-prev-card/NextPrevCard';
import Scroll from 'react-scroll';

export const INVALID_PAGE = -1;
const INVALID_CARD_ID = -1;

const scrollTo = offset => {
  Scroll.animateScroll.scrollTo(offset, {
    duration: 550,
    delay: 0,
    smooth: true,
  });
};

export default function App() {
  const [activeCardId, setActiveCardId] = useState(INVALID_CARD_ID);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [data, numberOfPages] = useCharactersData({ page: page, name: filter });
  const [offsets, setOffsets] = useState([]);

  useEffect(() => {
    setActiveCardId(data[0]?.id - 1);
    const pullOffsets = () => {
      const $offsets = [];

      for (let item of data) {
        const element = document.getElementById(item.id);
        if (!element) {
          console.error(`Cannot find element with id ${item.to}`);
          $offsets.push(0);
          continue;
        }
        $offsets.push(element.offsetTop - 185);
      }

      setOffsets($offsets);
    };

    pullOffsets();
  }, [data]);

  const handleFilterChange = value => {
    setPage(INVALID_PAGE);
    setFilter(value);
  };

  const handleFilterReset = () => {
    setPage(1);
    setFilter('');
  };

  const handlePrevClick = () => {
    const newActiveCardId = Math.max(data[0].id, activeCardId - 1);
    const cardOffsetIndex = Math.max(-1, (newActiveCardId - 1) % data.length);

    setActiveCardId(newActiveCardId);
    scrollTo(offsets[cardOffsetIndex]);
  };

  const handleNextClick = () => {
    const lastId = data[data.length - 1].id;
    const newActiveCardId = Math.min(lastId, activeCardId + 1);
    const cardOffsetIndex = Math.min(data.length, (newActiveCardId - 1) % data.length);

    setActiveCardId(newActiveCardId);
    scrollTo(offsets[cardOffsetIndex]);
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

  const deckOrNotFound =
    data.length == 0 ? (
      <NotFound />
    ) : (
      <>
        <Deck onClick={() => setActiveCardId(INVALID_CARD_ID)}>
          {data.map((item, index) => (
            <CharacterCard
              key={index}
              id={item.id}
              active={item.id == activeCardId}
              onClick={e => {
                e.stopPropagation();
                setActiveCardId(activeCardId == item.id ? 0 : item.id);
                scrollTo(offsets[index]);
              }}
              image={item.image ?? ''}
              name={item.name ?? ''}
              status={item.status ?? ''}
              species={item.species ?? ''}
              origin={item.origin ? item.origin.name : ''}
              lastKnownLocation={item.location ? item.location.name : ''}
              firstEpisodeUrl={item.episode[0] ?? ''}
            />
          ))}
        </Deck>
        <SimpleContainer style={{ justifyContent: 'center' }}>{pagination}</SimpleContainer>
      </>
    );

  return (
    <>
      <ThemeProvider theme={AppTheme}>
        <NextPrevCard onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
        <Navbar />
        <SimpleContainer>
          <Filter onValueChange={handleFilterChange} onReset={handleFilterReset} defaultText={'Character'} />
          {pagination}
        </SimpleContainer>
        <TopAnchor />
        {deckOrNotFound}
      </ThemeProvider>
    </>
  );
}
