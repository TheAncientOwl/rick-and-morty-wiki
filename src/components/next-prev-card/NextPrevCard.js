import { NextPrevContainer } from './NextPrevCardElements';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { Button } from '../filter/FilterElements';
import PropTypes from 'prop-types';

export default function NextPrevCard({ onPrevClick, onNextClick }) {
  return (
    <>
      <NextPrevContainer
        onClick={e => {
          e.stopPropagation();
          onPrevClick();
        }}
        isPrev>
        <Button style={{ margin: '0' }}>
          <FcPrevious />
        </Button>
      </NextPrevContainer>

      <NextPrevContainer
        onClick={e => {
          e.stopPropagation();
          onNextClick();
        }}>
        <Button style={{ margin: '0' }}>
          <FcNext />
        </Button>
      </NextPrevContainer>
    </>
  );
}

NextPrevCard.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};
