import React, { useState } from 'react';
import { Deck } from '../CardElements';
import useData from './useData';
import Filter from '../filter';
import characterCardsOrNotFound from './characterCardsOrNotFound';
import Pagination from '../pagination';
import { SimpleContainer } from '../filter/FilterElements';
import { moveToTopAnchor, TopAnchor } from '../TopAnchor';

export default function CharactersDeck() {
  const [currentPage, setCurrentPage] = useState(1);
  const [characterName, setCharacterName] = useState('');
  const [data, numberOfPages] = useData('character', { page: currentPage, name: characterName });

  const handleFilterChange = value => {
    setCurrentPage(-1);
    setCharacterName(value);
  };

  const handleFilterReset = () => {
    setCurrentPage(1);
    setCharacterName('');
  };

  const pagination = (
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
  );

  return (
    <>
      <SimpleContainer>
        <Filter onValueChange={handleFilterChange} onReset={handleFilterReset} defaultText='Character' />
        {pagination}
      </SimpleContainer>

      <TopAnchor />

      <Deck>{characterCardsOrNotFound(data)}</Deck>

      <SimpleContainer style={{ justifyContent: 'center' }}>{pagination}</SimpleContainer>
    </>
  );
}
