import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinksContainer = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: ${(props) => (props.type === "login" ? "#F9A144" : "#fff")};
  font-size: ${(props) =>
    props.type === "login"
      ? "1.2rem"
      : props.type === "signup"
      ? "1.2rem"
      : "1rem"};
  font-weight: ${(props) =>
    props.type === "login" ? "400" : props.type === "signup" ? "600" : "400"};
  text-decoration: none;
  text-transform: ${(props) => props.type === "link" && "uppercase"};
  margin: ${(props) =>
    props.type === "login"
      ? "0rem 1rem"
      : props.type === "signup"
      ? "0rem 1rem"
      : "0rem 2rem"};
  padding: ${(props) =>
    props.type === "login"
      ? "0.7rem 1.5rem"
      : props.type === "signup"
      ? "0.7rem 1.5rem"
      : "0rem"};
  background-color: ${(props) => (props.type == "signup" ? "#09B9CC" : "")};
  border: ${(props) => (props.type === "login" ? "1px solid #E8878E" : "")};
  border-radius: 7px;
`;

export const PersonalNavigation = styled.div``;
