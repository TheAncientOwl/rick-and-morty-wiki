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

  @media (max-width: ${Breakpoints.phone}) {
    grid-template-columns: 60%;
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

const frontCardActive = css`
  transform: translateY(-50%) scale(0.7);
  z-index: 10;
  min-height: 18em;

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

  @media (max-width: ${Breakpoints.phone}) {
    transform: translateY(20%) scale(1.2, 1.4);
  }
`;

const cardNumberActive = css`
  background: ${({ theme }) => theme.navbar.titleColor};
  transform: translate(50%, 82%);

  @media (max-width: ${Breakpoints.phone}) {
    transform: translate(50%, 80%);
  }
`;

export const Card = styled.div(
  ({ open }) => css`
    margin: 0 auto;
    position: relative;
    font-size: 0.85rem;
    cursor: pointer;

    @media (min-width: ${Breakpoints.desktop}) {
      &:hover {
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
      }
    }

    ${open &&
    css`
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
    `};
  `
);