import React, { useState } from 'react';
import { Deck } from './CardElements';
import fetchData from './fetchData';
import Filter from './filter';
import cardsOrNotFound from './cardsOrNotFound';
import Pagination from './pagination';
import { SimpleContainer } from './filter/FilterElements';
import { moveToTopAnchor, TopAnchor } from '../TopAnchor';
import PropTypes from 'prop-types';

export default function Category({ type }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [characterName, setCharacterName] = useState('');
  const [data, numberOfPages] = fetchData(type, { page: currentPage, name: characterName });

  const handleFilterChange = value => {
    setCurrentPage(-1);
    setCharacterName(value);
  };

  const handleFilterReset = () => {
    setCurrentPage(1);
    setCharacterName('');
  };

  const pagination = (
    <>
      {currentPage != -1 && (
        <Pagination
          currentPage={currentPage}
          pages={numberOfPages}
          onPrevClick={() => {
            setCurrentPage(Math.max(1, currentPage - 1));
            moveToTopAnchor();
          }}
          onNextClick={() => {
            setCurrentPage(Math.min(numberOfPages, currentPage + 1));
            moveToTopAnchor();
          }}
        />
      )}
    </>
  );

  return (
    <>
      <SimpleContainer>
        <Filter onValueChange={handleFilterChange} onReset={handleFilterReset} defaultText={type} />
        {pagination}
      </SimpleContainer>

      <TopAnchor />

      <Deck>{cardsOrNotFound(data, type)}</Deck>

      <SimpleContainer style={{ justifyContent: 'center' }}>{pagination}</SimpleContainer>
    </>
  );
}

Category.propTypes = {
  type: PropTypes.string.isRequired,
};
