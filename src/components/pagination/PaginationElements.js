import styled, { css } from 'styled-components';
import Breakpoints from '../../constants/Brakpoints';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.2em;
  font-size: 1.4em;
  font-weight: bold;
  color: ${({ theme }) => theme.navbar.titleColor};

  @media (max-width: ${Breakpoints.phone}) {
    margin: 0;
    justify-content: center;
  }
`;

export const Button = styled.div(
  ({ theme }) => css`
    display: flex;
    font-size: 0.9em;
    color: ${theme.navbar.titleColor};
    cursor: pointer;
    margin: 0 0.1em;

    &:hover {
      color: ${theme.navbar.titleShadowColor};
      transform: scale(1.2);
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
