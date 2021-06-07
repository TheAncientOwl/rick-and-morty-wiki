import styled, { css } from 'styled-components';
import { GiPreviousButton, GiNextButton } from 'react-icons/gi';

export const PaginationContainer = styled.div`
  margin-left: 1.2em;
  font-size: 1.4em;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.navbar.titleColor};
  font-weight: bold;
`;

export const PrevButton = styled(GiPreviousButton)(
  ({ theme }) =>
    css`
      font-size: 0.9em;
      color: ${theme.navbar.titleColor};
      cursor: pointer;
      &:hover {
        color: ${theme.navbar.titleShadowColor};
      }
    `
);

export const NextButton = styled(GiNextButton)(
  ({ theme }) =>
    css`
      font-size: 0.9em;
      color: ${theme.navbar.titleColor};
      cursor: pointer;
      &:hover {
        color: ${theme.navbar.titleShadowColor};
      }
    `
);

export const PageNumber = styled.span`
  font-family: 'Lobster', cursive;
  margin: 0 0.25em;
`;

export const PageSeparator = styled.span`
  font-family: 'Lobster', cursive;
`;
