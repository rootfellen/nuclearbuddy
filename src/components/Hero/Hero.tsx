import React, { ReactNode } from "react";
import {
  HeroSection,
  LeftBlock,
  LeftBlockImg,
  RightBlock,
  RightBlockImg,
} from "./HeroElements";
import leftImg from "../../assets/left.svg";
import rightImg from "../../assets/right.svg";

const Hero = ({ children }: { children: ReactNode }) => {
  return (
    <HeroSection>
      <LeftBlock>
        <LeftBlockImg src={leftImg} />
      </LeftBlock>
      {children}
      <RightBlock>
        <RightBlockImg src={rightImg} />
      </RightBlock>
    </HeroSection>
  );
};

export default Hero;
