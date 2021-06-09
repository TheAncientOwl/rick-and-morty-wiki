import PropTypes from 'prop-types';
import { Card, CardDetails, CardName } from './CardElements';

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
