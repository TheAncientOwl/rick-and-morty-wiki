import styled, { css } from 'styled-components';
import Breakpoints from '../Brakpoints';

export const Deck = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1.5rem;
  min-height: 83vh;
  padding: 1rem 3rem 1rem 2rem;

  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: 100%;
    padding: 1rem 0.5rem;
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.card.background};
  border: 0.2rem solid ${({ theme }) => theme.navbar.titleColor};
  box-shadow: 0.3rem 0.3rem ${({ theme }) => theme.navbar.titleShadowColor};
  border-radius: 1rem;
  overflow: hidden;
  display: flex;

  @media (max-width: ${Breakpoints.tablet}) {
    box-shadow: none;
  }
`;

export const CardImageWrapper = styled.div`
  width: 40%;

  @media (max-width: ${Breakpoints.phone}) {
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const VerticalDivider = styled.div`
  border: 1px solid ${({ theme }) => theme.navbar.titleColor};
  height: 100%;
`;

export const CardDetails = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 0.7rem 0;

  @media (max-width: ${Breakpoints.phone}) {
    font-size: 0.6rem;
  }
`;

export const CardName = styled.div(
  ({ theme }) => css`
    color: ${theme.navbar.titleColor};
    font-size: 2.3em;
    font-style: italic;
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
  font-size: 1.4em;
`;

export const Subtitle = styled(Lobster)`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 1.2em;
`;
