import React from "react";
import MobileNavigation from "../MobileNav/MobileNavigation";
import Navigation from "../Navigation/Navigation";
import { Navbar } from "./NavBarElements";

const NavBar = () => {
  return (
    <Navbar>
      <Navigation />
      <MobileNavigation />
    </Navbar>
  );
};

export default NavBar;
