import React from "react";
import { NavLink, NavLinksContainer } from "./NavLinksElements";

const NavLinks = () => {
  return (
    <>
      <NavLinksContainer>
        <NavLink type="link" to="/">
          Testimonials
        </NavLink>
        <NavLink type="link" to="/">
          Advisory Board
        </NavLink>
        <NavLink type="link" to="/">
          Subscribe
        </NavLink>
        <NavLink type="link" to="/">
          Contact Us
        </NavLink>
      </NavLinksContainer>
    </>
  );
};

export default NavLinks;
