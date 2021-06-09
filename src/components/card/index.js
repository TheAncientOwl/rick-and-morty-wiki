import PropTypes from 'prop-types';
import useEpisodeName from '../../utilities/useEpisodeName';

import { Card, CardNumber, Background } from './CardElements';
import { Map, Key, Value } from './MapElements';
import { FrontCard, CardImage, CardName, CardDetails } from './FrontCardElements';
import { BackCard } from './BackCardElements';

export default function CharacterCard({
  id,
  name,
  image,
  status,
  species,
  origin,
  lastKnownLocation,
  firstEpisodeUrl,
}) {
  console.log(status, species, origin, lastKnownLocation);
  const firstSeenIn = useEpisodeName(firstEpisodeUrl);

  return (
    <Card>
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

      <Background />

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
    </Card>
  );
}

CharacterCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  lastKnownLocation: PropTypes.string.isRequired,
  firstEpisodeUrl: PropTypes.string.isRequired,
};
