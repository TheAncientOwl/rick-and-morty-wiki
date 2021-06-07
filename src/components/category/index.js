import React, { useState } from 'react';
import {
  Deck,
  Card,
  CardImage,
  CardImageWrapper,
  VerticalDivider,
  CardDetails,
  CardName,
  Section,
  Subtitle,
  Title,
} from '../CardElements';
import useData from './useData';
import Filter from '../filter';
import NotFound from '../not-found';

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

  const deckCards = !data ? (
    <NotFound />
  ) : (
    data.map((item, index) => (
      <Card key={index}>
        <CardImageWrapper>
          <CardImage src={item.image} alt={item.name} />
        </CardImageWrapper>

        <VerticalDivider />

        <CardDetails>
          <CardName>{item.name}</CardName>

          {[
            { title: 'Status: ', subtitle: item.status },
            { title: 'Species: ', subtitle: item.species },
            {
              title: 'Last known location: ',
              subtitle: (
                <>
                  <br />
                  {item.location.name}
                </>
              ),
            },
          ].map((item, index) => (
            <Section key={index}>
              <Title>{item.title}</Title>
              <Subtitle>{item.subtitle}</Subtitle>
            </Section>
          ))}
        </CardDetails>
      </Card>
    ))
  );

  return (
    <div>
      <Filter onValueChange={handleFilterChange} onReset={handleFilterReset} defaultText='Character' />
      <Deck>{deckCards}</Deck>
    </div>
  );
}
