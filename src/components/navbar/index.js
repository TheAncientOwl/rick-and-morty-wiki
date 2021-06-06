import React, { useState } from 'react';
import {
  NavContainer,
  LogoContainer,
  LogoImg,
  NavTitle,
  CategoryLink,
  CategoryLinksContainer,
  NavMenuToggleButton,
} from './NavbarElements';
import LogoSrc from '../../images/logo.jpg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NavMenuToggleButton onClick={() => setMenuOpen(!menuOpen)} />
      <NavContainer>
        <LogoContainer>
          <LogoImg src={LogoSrc} alt='logo' />
        </LogoContainer>
        <NavTitle>Rick and Morty Wiki</NavTitle>
        <CategoryLinksContainer active={menuOpen}>
          {['Characters', 'Locations'].map((item, index) => (
            <CategoryLink
              key={index}
              onClick={() => {
                setMenuOpen(false);
              }}>
              {item}
            </CategoryLink>
          ))}
        </CategoryLinksContainer>
      </NavContainer>
    </>
  );
}
