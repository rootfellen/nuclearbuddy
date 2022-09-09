import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex: 0 1 30%;
`;

export const LogoImg = styled.img`
  width: 100%;
  max-width: 4rem;
  max-height: 4rem;
  padding-right: 1rem;
`;
export const LogoText = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: 400;

  span {
    font-weight: 800;
  }
`;
