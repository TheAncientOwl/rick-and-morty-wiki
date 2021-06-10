import { NavContainer, LogoContainer, LogoImg, NavTitle } from './NavbarElements';
import { moveToTopAnchor } from '../TopAnchor';
import LogoSrc from '../../images/logo.jpg';

export default function Navbar() {
  return (
    <NavContainer>
      <LogoContainer>
        <LogoImg src={LogoSrc} alt='logo' onClick={moveToTopAnchor} />
      </LogoContainer>
      <NavTitle>Rick and Morty Wiki</NavTitle>
    </NavContainer>
  );
}
