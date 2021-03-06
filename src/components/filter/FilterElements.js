import styled, { css } from 'styled-components';
import Breakpoints from '../../constants/Brakpoints';

export const SimpleContainer = styled.div(
  ({ theme }) => css`
    align-items: center;

    background: ${theme.navbar.background};
    padding: 0.1rem 0 0.4rem 0;

    @media (min-width: ${Breakpoints.tablet}) {
      display: flex;
    }

    @media (max-width: ${Breakpoints.tablet}) {
      font-size: 1.2rem;
    }

    @media (max-width: ${Breakpoints.phone}) {
      justify-content: center;
      text-align: center;
      font-size: 0.8rem;
    }
  `
);

export const FilterText = styled.span(
  ({ theme }) => css`
    color: ${theme.navbar.titleColor};
    font-size: 1.25em;
    font-family: 'Lobster', cursive;
    margin: 0 0.5em 0 1em;
  `
);

export const FilterForm = styled.form`
  display: inline;
`;

export const FilterLabel = styled.label`
  display: inline;
`;

export const FilterInput = styled.input(
  ({ theme }) => css`
    display: inline;
    width: 8em;

    color: ${theme.navbar.titleColor};
    font-size: 1.2em;
    font-family: 'Lobster', cursive;

    text-align: center;
    text-transform: capitalize;

    padding: 0.15em 0;
    background: inherit;

    border: 0.14em solid ${theme.navbar.titleColor};
    border-radius: 0.4em;

    &:focus {
      outline: none !important;
      color: ${theme.navbar.titleShadowColor};
      border: 0.14em solid;
    }

    &:hover {
      color: ${theme.navbar.titleShadowColor};
      border: 0.14em solid;
    }
  `
);

export const Button = styled.div(
  ({ theme }) => css`
    display: inline;
    text-align: center;
    font-size: 1.5em;
    color: ${theme.navbar.titleColor};
    margin: 0.2em 0 0 0.4em;
    cursor: pointer;

    &:hover {
      color: ${theme.navbar.titleShadowColor};
      transform: scale(1.2);
    }
  `
);
