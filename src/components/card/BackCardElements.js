import styled from 'styled-components';
import Breakpoints from '../../constants/Brakpoints';

export const BackCard = styled.div`
  position: absolute;
  top: 10.4em;
  left: 50%;
  transform: translateX(-50%);

  right: 0;

  border-radius: 0.8em;
  overflow: hidden;

  opacity: 0;

  min-height: 12em;
  width: 20em;

  @media (max-width: ${Breakpoints.tablet}) {
    width: 18em;
  }

  @media (max-width: ${Breakpoints.phone}) {
    top: 12em;
  }

  @media (max-width: ${Breakpoints.phoneSmall}) {
    top: 11em;
    width: 15em;
  }
`;
