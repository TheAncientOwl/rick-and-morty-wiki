import styled, { css } from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';

export const FooterContainer = styled.div(
  ({ theme }) => css`
    height: 2rem;
    background: ${theme.navbar.background};
    display: flex;
    align-items: center;
  `
);

export const GithubIcon = styled(GoMarkGithub)(
  ({ theme }) => css`
    font-size: 1.5rem;
    margin-top: 0.25rem;
    margin-left: 0.25rem;

    color: ${theme.navbar.titleColor};

    cursor: pointer;

    &:hover {
      color: ${theme.navbar.titleShadowColor};
    }
  `
);

export const Text = styled.span(
  ({ theme }) => css`
    color: ${theme.navbar.titleColor};
    font-size: 1.2rem;
    font-style: italic;
    letter-spacing: 0.15rem;
    font-family: 'Creepster', cursive;
    text-shadow: 0.12rem 0.12rem ${theme.navbar.titleShadowColor};
    max-width: 55vw;
    text-align: center;
    margin: 0 0.5rem;
  `
);
