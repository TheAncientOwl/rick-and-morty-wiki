import styled, { css } from 'styled-components';
import Breakpoints from '../../Brakpoints';

export const Deck = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: center;
  gap: 1.6rem;
  min-height: 83vh;
  padding: 1rem 3rem 1rem 2rem;

  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: 100%;
    padding: 1rem 0.5rem;
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.card.background};
  border: 0.2em solid ${({ theme }) => theme.navbar.titleColor};
  box-shadow: 0.3em 0.3em ${({ theme }) => theme.navbar.titleShadowColor};
  border-radius: 1em;
  overflow: hidden;
  display: flex;
  min-height: 14em;

  @media (max-width: ${Breakpoints.tablet}) {
    box-shadow: none;
    font-size: 1.25em;
  }

  @media (max-width: ${Breakpoints.phone}) {
    font-size: 0.8em;
  }
`;

export const CardImageWrapper = styled.div`
  width: 35%;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const VerticalDivider = styled.div`
  border: 0.1em solid ${({ theme }) => theme.navbar.titleColor};
  height: 100%;
`;

export const CardDetails = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 0.8em;
`;

export const CardName = styled.div(
  ({ theme }) => css`
    color: ${theme.navbar.titleColor};
    font-style: italic;
    font-size: 2em;
    letter-spacing: 0.12em;
    font-family: 'Creepster', cursive;
    text-shadow: 0.07em 0.07em ${theme.navbar.titleShadowColor};
  `
);

export const Section = styled.div`
  margin-top: 1em;
`;

const Lobster = styled.span`
  font-family: 'Lobster', cursive;
`;

export const Title = styled(Lobster)`
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.25em;
`;

export const Subtitle = styled(Lobster)`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 1.1em;
`;
