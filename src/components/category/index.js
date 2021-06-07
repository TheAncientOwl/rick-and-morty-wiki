import React, { useState } from 'react';
import { Deck } from '../CardElements';
import useData from './useData';
import Filter from '../filter';
import characterCardsOrNotFound from './characterCardsOrNotFound';

export default function CharactersDeck() {
  const [currentPage, setCurrentPage] = useState(1);
  const [characterName, setCharacterName] = useState('');
  const data = useData('character', { page: currentPage, name: characterName });

  const handleFilterChange = value => {
    setCurrentPage(-1);
    setCharacterName(value);
  };

  const handleFilterReset = () => {
    setCurrentPage(1);
    setCharacterName('');
  };

  return (
    <div>
      <Filter onValueChange={handleFilterChange} onReset={handleFilterReset} defaultText='Character' />
      <Deck>{characterCardsOrNotFound(data)}</Deck>
    </div>
  );
}
