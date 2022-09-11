import styled from "styled-components";

export const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
`;

export const LeftBlock = styled.div`
  position: absolute;
  width: 95%;
  height: 50%;
  top: 0;
  left: 0;
  z-index: -1;
  @media (max-width: 1300px) {
    width: 94%;
  }
  @media (max-width: 1200px) {
    width: 93%;
  }
`;

export const LeftBlockImg = styled.img`
  width: 100%;
  @media (max-width: 992px) {
    width: auto;
  }
`;
export const RightBlockImg = styled.img`
  width: 100%;
`;
export const RightBlock = styled.div`
  position: absolute;
  width: 40%;
  right: 0;
  top: 20%;
  height: 50%;
  z-index: -1;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeroContent = styled.div`
  display: flex;
  margin-top: 6rem;
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 50%;
  max-width: 35rem;
`;

export const HeroTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  span {
    font-weight: 800;
  }
`;

export const HeroSubtitle = styled.h2`
  color: #fff;
  font-size: 3rem;
  margin-bottom: 3rem;
`;

export const HeroContentDescription = styled.p`
  color: #fff;
  font-size: 1.125rem;
  width: 85%;
  line-height: 1.5rem;
  margin-bottom: 3.75rem;
`;

export const HeroContentCta = styled.div`
  display: flex;
`;

export const HeroTryBtn = styled.button`
  all: unset;
  background-color: #ff697c;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 7px;
  cursor: pointer;
  font-size: 1.125rem;
  margin-right: 1.5rem;
`;

export const HeroDownloadBtn = styled.button`
  all: unset;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-size: 1.125rem;
`;

export const HeroDownloadBtnIcon = styled.img`
  max-width: 1rem;
  width: 100%;
  padding-right: 0.5rem;
`;

export const HeroContentImage = styled.div`
  flex: 0 1 50%;
`;
