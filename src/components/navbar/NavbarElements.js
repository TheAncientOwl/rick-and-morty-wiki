import styled, { css } from 'styled-components';
import Breakpoints from '../../Brakpoints';
import { FaBars } from 'react-icons/fa';

const NAV_HEIGHT = '5rem';

export const NavContainer = styled.nav`
  height: ${NAV_HEIGHT};
  width: 100%;
  position: sticky;
  top: 0;
  padding: 0.2rem;
  background: ${({ theme }) => theme.navbar.background};
  display: flex;
  align-items: center;
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
    color: ${theme.navbar.titleColor};
    font-size: 2.3rem;
    font-style: italic;
    letter-spacing: 0.15rem;
    font-family: 'Creepster', cursive;
    text-shadow: 0.12rem 0.12rem ${theme.navbar.titleShadowColor};
    max-width: 55vw;
    text-align: center;

    @media (max-width: ${Breakpoints.phone}) {
      font-size: 1.4rem;
    }
  `
);

export const NavMenuToggleButton = styled(FaBars)(
  ({ theme, active }) => css`
    color: ${theme.navbar.titleColor};
    ${active &&
    css`
      color: ${theme.navbar.titleShadowColor};
    `};
    position: fixed;
    z-index: 100;
    top: -1000px;

    cursor: pointer;
    &:hover {
      color: ${theme.navbar.titleShadowColor};
    }

    @media (max-width: ${Breakpoints.tablet}) {
      top: 1rem;
      right: 1rem;
      font-size: 2rem;
    }

    @media (max-width: ${Breakpoints.phone}) {
      top: 0.8rem;
      right: 0.7rem;
      font-size: 1.4rem;
    }
  `
);

export const CategoryLinksContainer = styled.div(
  ({ theme, active }) => css`
    margin-left: 2rem;
    display: flex;
    transition: all 0.5s ease;

    @media (max-width: ${Breakpoints.tablet}) {
      position: absolute;
      top: -1000px;

      ${active &&
      css`
        top: 0;
        transition: all 0.5s ease;
      `}

      margin: 0;
      display: grid;
      grid-template-columns: auto;
      text-align: center;
      height: 25vh;
      width: 100%;
      background: ${theme.navbar.background};
      border-bottom: 3px solid ${theme.navbar.titleShadowColor};
      border-radius: 0.8rem;
      padding-top: 2rem;

      z-index: 200;
    }
  `
);

export const CategoryLink = styled.div(
  ({ theme }) => css`
    margin-right: 1rem;
    color: ${theme.navbar.titleColor};
    text-shadow: 0.12rem 0.12rem ${theme.navbar.titleShadowColor};

    font-size: 1.5rem;
    font-style: italic;
    letter-spacing: 0.15rem;
    font-family: 'Creepster', cursive;

    cursor: pointer;

    display: block;

    &:hover {
      color: ${theme.navbar.titleShadowColor};
      text-shadow: 0.12rem 0.12rem ${theme.navbar.titleColor};
      text-decoration: underline;
    }
  `
);
