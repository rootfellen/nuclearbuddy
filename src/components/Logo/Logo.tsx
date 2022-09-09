import React, { ReactNode } from "react";
import { LogoImg, LogoText, LogoWrapper } from "./LogoElements";
import logoImg from "../../assets/logo.png";

const Logo = () => {
  return (
    <>
      <LogoWrapper to="/">
        <LogoImg src={logoImg} />
        <LogoText>
          Nuclear<span>Buddy</span>
        </LogoText>
      </LogoWrapper>
    </>
  );
};

export default Logo;
