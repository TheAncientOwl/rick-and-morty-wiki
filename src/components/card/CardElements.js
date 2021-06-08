import styled, { css } from 'styled-components';
import Breakpoints from '../../Brakpoints';

export const Deck = styled.div`
  display: grid;
  grid-template-columns: 35% 35%;
  justify-content: center;
  gap: 2rem;
  min-height: 83vh;
  padding: 2rem 0;

  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: 75%;
  }

  @media (max-width: ${Breakpoints.phone}) {
    grid-template-columns: 85%;
    font-size: 0.7rem;
    padding: 1rem 0;
  }
`;

export const Card = styled.div`
  min-height: 12.5em;
  display: flex;
  overflow: hidden;

  background: ${({ theme }) => theme.card.background};
  border: 0.19em solid ${({ theme }) => theme.navbar.titleColor};
  box-shadow: 0.19em 0.14em ${({ theme }) => theme.navbar.titleShadowColor};
  border-radius: 1em;

  @media (max-width: ${Breakpoints.tablet}) {
    min-height: 14em;
  }
`;

export const CardImageWrapper = styled.div`
  width: 12.5em;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const VerticalDivider = styled.div`
  border: 1px solid ${({ theme }) => theme.navbar.titleColor};
`;

export const CardDetails = styled.div`
  padding: 0.5em 0.5em 0.5em 0.9em;
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
