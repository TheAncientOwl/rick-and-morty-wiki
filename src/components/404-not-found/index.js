import React from 'react';
import CategoryType from '../../CategoryType';
import { CardImage, CardName, VerticalDivider, Section, Title, Subtitle } from '../card/CardElements';
import useInfo from '../useInfo';
import { NotFoundCard, NotFoundDetails, NotFoundImageWrapper } from './NotFoundElements';

export default function NotFound() {
  const rickData = useInfo(CategoryType.character, { page: -1, name: 'Rick' });

  return (
    <NotFoundCard>
      <NotFoundImageWrapper>
        <CardImage src={rickData[0][0] ? rickData[0][0].image : ''} alt='Rick Sanchez' />
      </NotFoundImageWrapper>
      <VerticalDivider />
      <NotFoundDetails>
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
      </NotFoundDetails>
    </NotFoundCard>
  );
}
