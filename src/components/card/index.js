import PropTypes from 'prop-types';
import useEpisodeName from '../../hooks/useEpisodeName';

import { Background, Card, CardNumber } from './CardElements';
import { Map, Key, Value } from './MapElements';
import { FrontCard, CardImage, CardName, CardDetails } from './FrontCardElements';
import { BackCard } from './BackCardElements';
import Scroll from 'react-scroll';
import { useState } from 'react';

export default function CharacterCard({
  id,
  name,
  image,
  status,
  species,
  origin,
  lastKnownLocation,
  firstEpisodeUrl,
  active,
  onClick,
}) {
  const firstSeenIn = useEpisodeName(firstEpisodeUrl);
  const [offset, setOffset] = useState(0);

  const scrollHere = () => {
    Scroll.animateScroll.scrollTo(offset - 200, {
      duration: 550,
      delay: 60,
      smooth: true,
    });
  };

  return (
    <Card
      ref={element => {
        if (!element || offset) return;
        setOffset(element.getBoundingClientRect().top);
      }}
      open={active}
      onClick={e => {
        onClick(e);
        scrollHere();
      }}>
      <CardNumber>{id}</CardNumber>
      <FrontCard>
        <CardImage src={image} alt={name} />
        <CardDetails>
          <CardName>{name}</CardName>
          <Map>
            <Key>First seen in: </Key>
            <br />
            <Value>{firstSeenIn}</Value>
          </Map>
        </CardDetails>
      </FrontCard>

      <Background>
        <BackCard>
          {[
            { key: 'Status:', value: status, flex: true },
            { key: 'Species:', value: species, flex: true },
            { key: 'First seen in:', value: firstSeenIn, flex: true },
            { key: 'Origin:', value: origin, flex: true },
            { key: 'Last known location:', value: lastKnownLocation },
          ].map((item, index) => (
            <Map flex={item.flex} key={index}>
              <Key>{item.key}</Key>
              <Value>{item.value}</Value>
            </Map>
          ))}
        </BackCard>
      </Background>
    </Card>
  );
}

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  lastKnownLocation: PropTypes.string.isRequired,
  firstEpisodeUrl: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
