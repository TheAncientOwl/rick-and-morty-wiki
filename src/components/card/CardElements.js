import styled, { css } from 'styled-components';
import { Map } from './MapElements';
import { FrontCard } from './FrontCardElements';
import { BackCard } from './BackCardElements';
import Breakpoints from '../../constants/Brakpoints';

export const Deck = styled.div`
  min-height: 75vh;
  display: grid;
  grid-template-columns: 18% 18% 18% 18%;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: 27% 27% 27%;
  }
`;

export const CardNumber = styled.div`
  position: absolute;
  font-weight: bold;
  top: 0;
  right: 0.6em;
  background: rgba(0, 0, 0, 0.65);
  padding: 0.5em 0.5em 0.75em;
  clip-path: polygon(100% 0, 100% 100%, 50% 85%, 0% 100%, 0 0);
  font-family: 'Lobster', cursive;
  color: ${({ theme }) => theme.text.secondary};
  transition: transform 250ms cubic-bezier(0.21, 1, 0.81, 1);
`;

export const Background = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 2em;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;

    transform: scale(0.1, 0.6);

    background: ${theme.navbar.background};
    border: 0.2em solid ${theme.navbar.titleColor};
    border-radius: 0.8em;
    overflow: hidden;

    opacity: 0;
  `
);

export const Card = styled.div`
  margin: 0 auto;
  position: relative;
  font-size: 0.85rem;

  &:hover {
    z-index: 2000;
  }

  &:hover ${CardNumber} {
    background: ${({ theme }) => theme.navbar.titleColor};
    transform: translate(50%, 82%);
  }

  &:hover ${FrontCard} {
    transform: translateY(-35%) scale(0.7);
    z-index: 10;
    min-height: 18em;

    ${Map} {
      display: none;
    }
  }

  &:hover ${Background} {
    transform: scale(1.2, 1);
    transition: 250ms cubic-bezier(0.21, 1, 0.81, 1), opacity 100ms linear;
    opacity: 1;
  }

  &:hover ${BackCard} {
    transition: 250ms cubic-bezier(0.21, 1, 0.81, 1), opacity 100ms linear;
    opacity: 1;
  }
`;
