import PropTypes from 'prop-types';
import {
  Card,
  CardDetails,
  CardImage,
  CardImageWrapper,
  CardName,
  VerticalDivider,
  Section,
  Title,
  Subtitle,
} from './CardElements';

export default function CharacterCard({ image, name, status, species, lastKnownLocation }) {
  const details = (
    <>
      {[
        { title: 'Status: ', subtitle: status },
        { title: 'Species: ', subtitle: species },
        {
          title: 'Last known location: ',
          subtitle: (
            <>
              <br />
              {lastKnownLocation}
            </>
          ),
        },
      ].map((item, index) => (
        <Section key={index}>
          <Title>{item.title}</Title>
          <Subtitle>{item.subtitle}</Subtitle>
        </Section>
      ))}
    </>
  );

  return (
    <Card>
      <CardImageWrapper>
        <CardImage src={image} alt={name} />
      </CardImageWrapper>
      <VerticalDivider />
      <CardDetails>
        <CardName>{name}</CardName>
        {details}
      </CardDetails>
    </Card>
  );
}

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  lastKnownLocation: PropTypes.string.isRequired,
};
