import React from 'react';
import { FooterContainer, GithubIcon, Text } from './FooterElements';

export default function Footer() {
  return (
    <FooterContainer>
      <GithubIcon
        onClick={() => {
          window.open('https://github.com/TheAncientOwl/rick-and-morty-wiki', 'blank');
        }}
      />
      <Text>Project repository</Text>
    </FooterContainer>
  );
}
