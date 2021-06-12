import { NextPrevContainer } from './NextPrevCardElements';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { Button } from '../filter/FilterElements';
import PropTypes from 'prop-types';

export default function NextPrevCard({ onPrevClick, onNextClick }) {
  return (
    <>
      <NextPrevContainer isPrev>
        <Button>
          <FcPrevious onClick={onPrevClick} />
        </Button>
      </NextPrevContainer>
      <NextPrevContainer>
        <Button>
          <FcNext onClick={onNextClick} />
        </Button>
      </NextPrevContainer>
    </>
  );
}

NextPrevCard.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};
