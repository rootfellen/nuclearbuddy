import React from "react";
import { NavLink } from "./NavLinksElements";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/">Testimonials</NavLink>
      <NavLink to="/">Advisory Board</NavLink>
      <NavLink to="/">Subscribe</NavLink>
      <NavLink to="/">Contact Us</NavLink>
    </>
  );
};

export default NavLinks;
