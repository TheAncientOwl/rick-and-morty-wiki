import React from 'react';
import { Card, CardDetails, CardName } from './CardElements';
import PropTypes from 'prop-types';

export default function LocationCard({ name }) {
  return (
    <Card>
      <CardDetails>
        <CardName>{name}</CardName>
      </CardDetails>
    </Card>
  );
}

LocationCard.propTypes = {
  name: PropTypes.string.isRequired,
};
