import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex: 0 1 30%;
  @media (max-width: 1400px) {
    flex: 0 1 28%;
  }
  @media (max-width: 1300px) {
    flex: 0 1 25%;
  }
  @media (max-width: 1150px) {
    flex: 0 1 25%;
  }
`;

export const LogoImg = styled.img`
  width: 100%;
  max-width: 4rem;
  max-height: 4rem;
  padding-right: 1rem;
  @media (max-width: 1400px) {
    width: 2rem;
    height: 2rem;
  }
  @media (max-width: 1250px) {
    width: 1rem;
    height: 1rem;
  }
`;
export const LogoText = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: 400;
  @media (max-width: 1400px) {
    font-size: 2rem;
  }
  @media (max-width: 1150px) {
    font-size: 1.5rem;
  }

  span {
    font-weight: 800;
  }
`;
