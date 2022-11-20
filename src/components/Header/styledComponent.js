import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  width: 100vw;
  bax-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  height: 64px;
  position: fixed;
  z-index: 1;
  top: 0;
`;

export const ContentContainer = styled.div`
  width: 80%;
  max-width: 1100px;
  background-color: #ffffff;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const WebsiteLogo = styled.img`
  height: 65px;
  width: 60px;
  margin-right: 12px;
  cursor: pointer;
  @media all and (max-width: 380px) {
    height: 54px;
    width: 58px;
  }
`;

export const LgNavMenu = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 780px) {
    display: none;
  }
`;

export const SmNavMenu = styled.div`
  width: 80%;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  @media all and (min-width: 780px) {
    display: none;
  }
`;

export const LinkItem = styled(NavLink)`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  line-height: 18px;
  text-decoration: none;
  margin-right: 16px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  :hover {
    text-decoration: underline #409ef4 2px;
    color: #4094ef;
  }
  color: ${(props) => (props.selected ? "#4094EF" : "#262626")};
  @media all and (max-width: 814px) {
    margin-right: 10px;
    font-size: 16px;
  }
  @media all and (max-width: 380px) {
    font-size: 14px;
  }
`;
