import { NavContainer, LogoContainer, LogoImg, NavTitle } from './NavbarElements';
import LogoSrc from '../../images/logo.jpg';
import { moveToTopAnchor } from '../TopAnchor';

export default function Navbar() {
  return (
    <>
      <NavContainer>
        <LogoContainer>
          <LogoImg src={LogoSrc} alt='logo' onClick={moveToTopAnchor} />
        </LogoContainer>
        <NavTitle>Rick and Morty Wiki</NavTitle>
      </NavContainer>
    </>
  );
}
