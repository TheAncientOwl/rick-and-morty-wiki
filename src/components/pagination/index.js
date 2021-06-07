import React from 'react';
import PropTypes from 'prop-types';
import { PageNumber, PageSeparator, PaginationContainer, PrevButton, NextButton } from './PaginationElements';

export default function Pagination({ currentPage, pages, onPrevClick, onNextClick }) {
  return (
    <PaginationContainer>
      <PrevButton onClick={onPrevClick} />
      <PageNumber>{currentPage}</PageNumber>
      <PageSeparator>/</PageSeparator>
      <PageNumber>{pages}</PageNumber>
      <NextButton onClick={onNextClick} />
    </PaginationContainer>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};
