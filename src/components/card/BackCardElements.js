import styled from 'styled-components';
import Breakpoints from '../../constants/Brakpoints';

export const BackCard = styled.div`
  padding: 6.2em 0.6em 1em 0.6em;

  @media (max-width: ${Breakpoints.phone}) {
    padding-top: 4.5em;
  }
`;
