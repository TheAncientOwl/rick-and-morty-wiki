import { Card, CardNumber, Background, Deck } from './CardElements';
import { Map, Key, Value } from './MapElements';
import { FrontCard, CardImage, CardName, CardDetails } from './FrontCardElements';
import { BackCard } from './BackCardElements';

import useCharactersData from '../../hooks/useCharactersData';
import { INVALID_PAGE } from '../../App';
import { useState } from 'react';

import styled from 'styled-components';
import Breakpoints from '../../constants/Brakpoints';

const NotFoundContainer = styled(Deck)`
  grid-template-columns: 18%;

  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: 35%;
  }

  @media (max-width: ${Breakpoints.phone}) {
    grid-template-columns: 60%;
    margin: 3.7rem 0;
  }
`;

export default function NotFound() {
  const [open, setOpen] = useState(false);
  const rickData = useCharactersData({ page: INVALID_PAGE, name: 'Rick' });

  return (
    <NotFoundContainer onClick={() => setOpen(false)}>
      <Card
        open={open}
        onClick={e => {
          e.stopPropagation();
          setOpen(!open);
        }}>
        <CardNumber>404</CardNumber>
        <FrontCard>
          <CardImage src={rickData[0][0] ? rickData[0][0].image : ''} alt='Rick Sanchez' />
          <CardDetails>
            <CardName>~ 404 ~</CardName>
            <Map>
              <Key>First seen in: </Key>
              <br />
              <Value>The beginning o&apos; the time</Value>
            </Map>
          </CardDetails>
        </FrontCard>

        <Background>
          <BackCard>
            {[
              { key: 'Morty:', value: 'Aw geez, Rick, something bad happened!', flex: true },
              {
                key: 'Rick:',
                value: `Yes, obviously Morty. You're as dumb as they come. Someone tried to find something that didn't exist.`,
                flex: true,
              },
              { key: 'Morty:', value: 'Aw ...', flex: true },
            ].map((item, index) => (
              <Map flex={item.flex} key={index}>
                <Key>{item.key}</Key>
                <Value>{item.value}</Value>
              </Map>
            ))}
          </BackCard>
        </Background>
      </Card>
    </NotFoundContainer>
  );
}

/*const messages = (
    <>
      {' '}
      {[
        { character: '', text:  },
        {
          character: 'Rick',
          text: ,
        },
        { character: 'Morty', text:  },
      ].map((item, index) => (
        <Section key={index}>
          <Title>{item.character}:</Title>
          <Subtitle>{item.text}</Subtitle>
        </Section>
      ))}
    </>
  ); */
