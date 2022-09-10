import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import { MobileIcon, MobileMenu, MobileNav } from "./MobileNavigationElements";
import MobileMenuIcon from "../../assets/mobile_menu.svg";
import { NavLink, PersonalNavigation } from "../NavLinks/NavLinksElements";
import { slide as Menu } from "react-burger-menu";

import styles from "./BurgerStyles";

const MobileNavigation = () => {
  return (
    <MobileNav>
      <Menu right styles={styles}>
        <NavLinks />
      </Menu>
    </MobileNav>
  );
};

export default MobileNavigation;
