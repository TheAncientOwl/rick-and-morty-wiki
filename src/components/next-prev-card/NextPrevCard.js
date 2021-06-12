import { NextPrevContainer } from './NextPrevCardElements';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { Button } from '../filter/FilterElements';
import PropTypes from 'prop-types';

export default function NextPrevCard({ onPrevClick, onNextClick }) {
  return (
    <>
      <NextPrevContainer isPrev>
        <Button style={{ margin: '0' }}>
          <FcPrevious
            onClick={e => {
              e.stopPropagation();
              onPrevClick();
            }}
          />
        </Button>
      </NextPrevContainer>
      <NextPrevContainer>
        <Button style={{ margin: '0' }}>
          <FcNext
            onClick={e => {
              e.stopPropagation();
              onNextClick();
            }}
          />
        </Button>
      </NextPrevContainer>
    </>
  );
}

NextPrevCard.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};
