import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 70%;
  @media (max-width: 992px) {
    justify-content: flex-end;
  }
`;
