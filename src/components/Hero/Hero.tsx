import React, { ReactNode } from "react";
import {
  Header,
  HeroContent,
  HeroContentCta,
  HeroContentDescription,
  HeroContentImage,
  HeroContentWrapper,
  HeroDownloadBtn,
  HeroDownloadBtnIcon,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  HeroTryBtn,
  LeftBlock,
  LeftBlockImg,
  RightBlock,
  RightBlockImg,
} from "./HeroElements";
import leftImg from "../../assets/left.svg";
import rightImg from "../../assets/right.svg";
import { Container } from "../../AppElements";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import Download from "../../assets/download.png";
import HeroImage from "../../assets/hero_img.svg";

const Hero = () => {
  return (
    <HeroSection>
      <LeftBlock>
        <LeftBlockImg src={leftImg} />
      </LeftBlock>
      <Container>
        <Header>
          <Logo />
          <NavBar />
        </Header>
        <HeroContent>
          <HeroContentWrapper>
            <HeroTitle>
              Welcome to <span>NuclearBuddy</span>
            </HeroTitle>
            <HeroSubtitle>
              Turn your dreams into radioactive outcome
            </HeroSubtitle>
            <HeroContentDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </HeroContentDescription>
            <HeroContentCta>
              <HeroTryBtn>Try it now</HeroTryBtn>
              <HeroDownloadBtn>
                <HeroDownloadBtnIcon src={Download} /> Download Guide
              </HeroDownloadBtn>
            </HeroContentCta>
          </HeroContentWrapper>
          <HeroContentImage>
            <img src={HeroImage} alt="NuclearBuddy" />
          </HeroContentImage>
        </HeroContent>
      </Container>
      <RightBlock>
        <RightBlockImg src={rightImg} />
      </RightBlock>
    </HeroSection>
  );
};

export default Hero;
