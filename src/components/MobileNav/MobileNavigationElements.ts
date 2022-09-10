import styled from "styled-components";

export const MobileNav = styled.nav`
  display: none;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const MobileIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
