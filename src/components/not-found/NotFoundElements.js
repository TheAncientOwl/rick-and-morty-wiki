import styled from 'styled-components';
import { Card } from '../CardElements';
import Breakpoints from '../../Brakpoints';

export const NotFoundCard = styled(Card)`
  width: 50vw;
  height: 25vw;

  @media (max-width: ${Breakpoints.tablet}) {
    width: 80vw;
    height: 40vw;
  }

  @media (max-width: ${Breakpoints.phone}) {
    font-size: 0.8rem;
  }
`;

export const NotFoundImageContainer = styled.div`
  width: 10vw;
`;
