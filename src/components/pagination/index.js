import PropTypes from 'prop-types';
import { PageNumber, PageSeparator, PaginationContainer, Button } from './PaginationElements';
import { GiPreviousButton, GiNextButton } from 'react-icons/gi';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from 'react-icons/bs';

export default function Pagination({ currentPage, pages, onPrevClick, onNextClick, jumpToFirst, jumpToLast }) {
  return (
    <PaginationContainer>
      <Button onClick={jumpToFirst}>
        <BsFillSkipBackwardFill />
      </Button>
      <Button onClick={onPrevClick}>
        <GiPreviousButton />
      </Button>

      <PageNumber>{currentPage}</PageNumber>
      <PageSeparator>/</PageSeparator>
      <PageNumber>{pages}</PageNumber>

      <Button onClick={onNextClick}>
        <GiNextButton />
      </Button>
      <Button onClick={jumpToLast}>
        <BsFillSkipForwardFill />
      </Button>
    </PaginationContainer>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  jumpToFirst: PropTypes.func.isRequired,
  jumpToLast: PropTypes.func.isRequired,
};
