import PropTypes from 'prop-types';
import {
  PageNumber,
  PageSeparator,
  PaginationContainer,
  PrevButton,
  NextButton,
  LastButton,
  FirstButton,
} from './PaginationElements';

export default function Pagination({ currentPage, pages, onPrevClick, onNextClick, jumpToFirst, jumpToLast }) {
  return (
    <PaginationContainer>
      <FirstButton onClick={jumpToFirst} />
      <PrevButton onClick={onPrevClick} />
      <PageNumber>{currentPage}</PageNumber>
      <PageSeparator>/</PageSeparator>
      <PageNumber>{pages}</PageNumber>
      <NextButton onClick={onNextClick} />
      <LastButton onClick={jumpToLast} />
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
