import React from 'react';
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

export default function CharactersDeck() {
  const data = useData('character');

  const handleFilterChange = value => console.log(value);

  return (
    <>
      <Filter onValueChange={handleFilterChange} defaultText='Character' />
      <Deck>
        {data.map((item, index) => (
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
        ))}
      </Deck>
    </>
  );
}
