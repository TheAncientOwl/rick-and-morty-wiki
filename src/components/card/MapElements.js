import styled from 'styled-components';

export const Map = styled.div`
  margin: 0 0.8em 0.5em 0.8em;
  font-family: 'Lobster', cursive;
`;

export const Key = styled.span`
  color: ${({ theme }) => theme.text.primary};
  font-family: inherit;
  font-size: 1.25em;
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.text.secondary};
  font-family: inherit;
  font-size: 1.1em;
  padding-left: 0.4em;
`;
