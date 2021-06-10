import styled, { css } from 'styled-components';

export const FrontCard = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-flow: column;
    overflow: hidden;
    min-height: 26em;

    border: 0.2em solid ${theme.navbar.titleColor};
    border-radius: 0.7em;

    background: ${theme.navbar.titleColor};

    transition: 250ms;
  `
);

export const CardImage = styled.img(
  ({ theme }) => css`
    width: 100%;
    height: auto;

    border-bottom: 0.22em solid ${theme.navbar.titleColor};
  `
);

export const CardDetails = styled.div`
  background: ${({ theme }) => theme.card.background};
  flex-grow: 1;
`;

export const CardName = styled.div(
  ({ theme }) => css`
    text-align: center;
    font-size: 1.6em;
    font-family: 'Lobster', cursive;
    color: ${theme.navbar.titleColor};

    padding: 0.4em 0.2em;
  `
);
