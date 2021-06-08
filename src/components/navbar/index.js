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
import { moveToTopAnchor } from '../TopAnchor';
import PropTypes from 'prop-types';
import CategoryType from '../../CategoryType';

export default function Navbar({ onCategoryChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NavMenuToggleButton active={menuOpen ? 1 : 0} onClick={() => setMenuOpen(!menuOpen)} />
      <NavContainer>
        <LogoContainer>
          <LogoImg src={LogoSrc} alt='logo' onClick={moveToTopAnchor} />
        </LogoContainer>
        <NavTitle onClick={moveToTopAnchor}>Rick and Morty Wiki</NavTitle>
        <CategoryLinksContainer active={menuOpen}>
          {[CategoryType.character, CategoryType.location].map((item, index) => (
            <CategoryLink
              key={index}
              onClick={() => {
                onCategoryChange(item);
                moveToTopAnchor();
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

Navbar.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};
