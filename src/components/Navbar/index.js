import React from "react";
//import { Link } from 'react-router-dom'

import {
  A,
  ListItem,
  Logo,
  LogoText,
  NavbarSection,
  NLink,
  UlList,
} from "./style";

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>EL-BDEV</LogoText>
        </Logo>

        <UlList>
          <ListItem>
            <NLink to="/">Home</NLink>
          </ListItem>
          <ListItem>
            <A href="#work">Work</A>
          </ListItem>
          <ListItem>
            <A href="#portfolio">Portfolio</A>
          </ListItem>

          <ListItem>
            <A href="#about">About</A>
          </ListItem>
          <ListItem>
            <NLink to="/Contact">Contact</NLink>
          </ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
