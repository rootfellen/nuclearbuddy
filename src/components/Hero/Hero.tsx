import React, { ReactNode } from "react";
import { HeroSection } from "./HeroElements";

const Hero = ({ children }: { children: ReactNode }) => {
  return <HeroSection>{children}</HeroSection>;
};

export default Hero;
