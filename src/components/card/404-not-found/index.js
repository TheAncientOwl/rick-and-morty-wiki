import { CardImage, CardName, VerticalDivider, Section, Title, Subtitle } from '../CardElements';
import { NotFoundCard, NotFoundDetails, NotFoundImageWrapper } from './NotFoundElements';
import useCharactersData from '../../../hooks/useCharactersData';
import { INVALID_PAGE } from '../../../App';

export default function NotFound() {
  const rickData = useCharactersData({ page: INVALID_PAGE, name: 'Rick' });

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
