import React from "react";
import MobileNavigation from "../MobileNav/MobileNavigation";
import Navigation from "../Navigation/Navigation";
import { NavLink, PersonalNavigation } from "../NavLinks/NavLinksElements";
import { Navbar } from "./NavBarElements";

const NavBar = () => {
  return (
    <Navbar>
      <Navigation />
      <PersonalNavigation>
        <NavLink type="login" to="/">
          Login
        </NavLink>
        <NavLink type="signup" to="/">
          Sign Up
        </NavLink>
      </PersonalNavigation>
      <MobileNavigation />
    </Navbar>
  );
};

export default NavBar;
