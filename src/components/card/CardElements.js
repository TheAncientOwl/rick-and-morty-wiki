import styled, { css } from 'styled-components';
import { Map } from './MapElements';
import { FrontCard } from './FrontCardElements';
import { BackCard } from './BackCardElements';
import Breakpoints from '../../constants/Brakpoints';

export const Deck = styled.div`
  display: grid;
  grid-template-columns: 18% 18% 18% 18%;
  justify-content: center;
  gap: 2rem;

  margin: 3.2rem 0;
  min-height: 75vh;

  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: 27% 27% 27%;
  }

  @media (max-width: ${Breakpoints.phone}) {
    grid-template-columns: 60%;
  }
`;

export const CardNumber = styled.div`
  position: absolute;
  top: 0;
  right: 0.6em;

  background: rgba(0, 0, 0, 0.65);
  color: ${({ theme }) => theme.text.secondary};

  font-weight: bold;
  font-family: 'Lobster', cursive;

  padding: 0.5em 0.5em 0.75em;
  clip-path: polygon(100% 0, 100% 100%, 50% 85%, 0% 100%, 0 0);

  transition: transform 250ms cubic-bezier(0.21, 1, 0.81, 1);
`;

export const Background = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 2em;
    z-index: -1;

    transform: scale(0.4, 0.8);

    background: ${theme.navbar.background};
    border: 0.2em solid ${theme.navbar.titleColor};
    border-radius: 0.8em;

    opacity: 0;
  `
);

const frontCardActive = css`
  transform: translateY(-50%) scale(0.7);
  min-height: 18em;
  z-index: 10;

  ${Map} {
    display: none;
  }
`;

const backCardActive = css`
  transition: 250ms cubic-bezier(0.21, 1, 0.81, 1), opacity 100ms linear;
  opacity: 1;
`;

const backgroundActive = css`
  transform: scale(1.2, 1);
  transition: 250ms cubic-bezier(0.21, 1, 0.81, 1), opacity 100ms linear;
  opacity: 1;
  min-height: 24em;

  @media (max-width: ${Breakpoints.phone}) {
    transform: translateY(20%) scale(1.2, 1.4);
    min-height: 18em;
  }
`;

const cardNumberActive = css`
  background: ${({ theme }) => theme.navbar.titleColor};
  transform: translate(50%, 82%);

  @media (max-width: ${Breakpoints.phone}) {
    transform: translate(50%, 80%);
  }
`;

const cardActive = css`
  z-index: 2000;

  ${FrontCard} {
    ${frontCardActive}
  }

  ${BackCard} {
    ${backCardActive}
  }

  ${Background} {
    ${backgroundActive}
  }

  ${CardNumber} {
    ${cardNumberActive}
  }
`;

export const Card = styled.div(
  ({ open }) => css`
    position: relative;
    font-size: 0.85rem;
    margin: 0 auto;
    cursor: pointer;

    ${open && cardActive};

    @media (min-width: ${Breakpoints.desktop}) {
      &:hover {
        ${cardActive}
      }
    }
  `
);
