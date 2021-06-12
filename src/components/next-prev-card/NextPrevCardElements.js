import styled, { css } from 'styled-components';
import Breakpoints from '../../constants/Brakpoints';

export const NextPrevContainer = styled.div(
  ({ isPrev }) => css`
    position: fixed;
    top: 50vh;
    right: 1rem;
    transform: translateY(-50%);

    ${isPrev &&
    css`
      left: 1rem;
    `}

    z-index: 99999;
    font-size: 0.8rem;

    @media (min-width: ${Breakpoints.phone}) {
      display: none;
    }
  `
);
