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
  const [shouldDefaultFetch, setShouldDefaultFetch] = useState(false);
  const [characterName, setCharacterName] = useState('');
  const data = useData('character', { default: shouldDefaultFetch, name: characterName });

  const handleFilterChange = value => {
    setShouldDefaultFetch(false);
    setCharacterName(value);
  };

  const handleFilterReset = () => {
    setShouldDefaultFetch(true);
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

          <Section>
            <Title>Status: </Title>
            <Subtitle>{item.status}</Subtitle>
          </Section>

          <Section>
            <Title>Species: </Title>
            <Subtitle>{item.species}</Subtitle>
          </Section>

          <Section>
            <Title>Last known location: </Title>
            <br />
            <Subtitle>{item.location.name}</Subtitle>
          </Section>
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
