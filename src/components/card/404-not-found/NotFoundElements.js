import styled from 'styled-components';
import { Card, CardDetails } from '../CardElements';
import Breakpoints from '../../../Brakpoints';

export const NotFoundCard = styled(Card)`
  width: 45vw;
  height: 20vw;

  @media (max-width: ${Breakpoints.tablet}) {
    width: 80vw;
    height: 35vw;
  }

  @media (max-width: ${Breakpoints.phone}) {
    width: 87vw;
    height: 60vw;
  }
`;

export const NotFoundImageWrapper = styled.div`
  width: 45%;
`;

export const NotFoundDetails = styled(CardDetails)`
  width: 59%;
`;
