import React from 'react';
import {
  CardDetails,
  CardImage,
  CardImageWrapper,
  CardName,
  Section,
  Subtitle,
  Title,
  VerticalDivider,
} from '../CardElements';
import CategoryType from '../CategoryType';
import useData from '../useData';
import { NotFoundCard } from './NotFoundElements';

export default function NotFound() {
  const rickData = useData(CategoryType.character, { page: -1, name: 'Rick' });
  return (
    <NotFoundCard>
      <CardImageWrapper>
        <CardImage src={rickData[0][0] ? rickData[0][0].image : ''} alt='Rick Sanchez' />
      </CardImageWrapper>

      <VerticalDivider />

      <CardDetails>
        <CardName style={{ textAlign: 'center' }}>~ 404 ~</CardName>

        {[
          { character: 'Morty', text: ' Aw geez, Rick, something bad happened!' },
          {
            character: 'Rick',
            text: ` Yes, obviously Morty. You're as dumb as they come. Someone tried to find something that didn't exist.`,
          },
          { character: 'Morty', text: ' Aw ...' },
        ].map((item, index) => (
          <Section key={index}>
            <Title>{item.character}:</Title>
            <Subtitle>{item.text}</Subtitle>
          </Section>
        ))}
      </CardDetails>
    </NotFoundCard>
  );
}
