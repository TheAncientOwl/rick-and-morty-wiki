import styled, { css } from 'styled-components';
import Breakpoints from '../../constants/Brakpoints';

const NAV_HEIGHT = '5rem';

export const NavContainer = styled.nav`
  z-index: 9999;
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;

  width: 100%;
  height: ${NAV_HEIGHT};

  padding: 0.2rem;

  background: ${({ theme }) => theme.navbar.background};
`;

export const LogoContainer = styled.div`
  height: ${NAV_HEIGHT};
  margin: 0 0.5rem;

  @media (max-width: ${Breakpoints.phone}) {
    margin: 0;
  }
`;

export const LogoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;

  &:hover {
    border: 0.17rem solid rgb(207, 17, 43);
    border-radius: 50%;
  }
`;

export const NavTitle = styled.div(
  ({ theme }) => css`
    max-width: 55vw;

    font-size: 2.3rem;
    font-style: italic;
    font-family: 'Creepster', cursive;

    color: ${theme.navbar.titleColor};
    letter-spacing: 0.15rem;
    text-shadow: 0.12rem 0.12rem ${theme.navbar.titleShadowColor};
    text-align: center;

    @media (max-width: ${Breakpoints.phone}) {
      font-size: 1.4rem;
    }
  `
);
