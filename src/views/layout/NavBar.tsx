import LogoImg from "../../assets/Logo.png";

import {
  Bars,
  ItemsLi,
  Logo,
  LogoAndName,
  Navbar,
  NavBarContainer,
  NavRightUl,
  PurlieuLabel,
} from "../style";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Navbar>
        <LogoAndName>
          <Logo src={LogoImg} alt="logo" />
          <PurlieuLabel>Purlieu - KU</PurlieuLabel>
        </LogoAndName>
        <Bars />
        <NavRightUl>
          <ItemsLi>Home</ItemsLi>
          <ItemsLi>About</ItemsLi>
        </NavRightUl>
      </Navbar>
    </NavBarContainer>
  );
};
