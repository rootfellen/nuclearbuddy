import styled from "styled-components";

export const HeroSection = styled.section`
  height: 100vh;
  position: relative;
`;

export const LeftBlock = styled.div`
  position: absolute;
  width: 95%;
  height: 50%;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const LeftBlockImg = styled.img`
  width: 100%;
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
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
