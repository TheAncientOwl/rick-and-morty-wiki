import React from 'react';
import {
  Card,
  CardImage,
  CardImageWrapper,
  VerticalDivider,
  CardDetails,
  CardName,
  Section,
  Subtitle,
  Title,
} from './CardElements';
import PropTypes from 'prop-types';

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
