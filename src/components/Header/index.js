// import { useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  NavContainer,
  ContentContainer,
  WebsiteLogo,
  LgNavMenu,
  SmNavMenu,
  LinkItem,
} from "./styledComponent";
const Header = () => {
  //const location = useLocation();
  return (
    <NavContainer>
      <ContentContainer>
        <LinkItem>
          <WebsiteLogo
            src="https://www.logolynx.com/images/logolynx/a6/a671ef222a6e136f8fe7fd9cfc97e57b.png"
            alt="eCommerce"
          />
        </LinkItem>
        <LgNavMenu>
          <LinkItem to="/">Home</LinkItem>
          <LinkItem to="/brands">Brands</LinkItem>
          <LinkItem to="/cart">
            cart
            <AiOutlineShoppingCart height="40" width="40" color="#000000" />
          </LinkItem>
        </LgNavMenu>
        <SmNavMenu>
          <LinkItem to="/">Home</LinkItem>
          <LinkItem to="/brands">Brands</LinkItem>
          <LinkItem to="/cart">
            cart
            <AiOutlineShoppingCart height="30" width="30" color="#000000" />
          </LinkItem>
        </SmNavMenu>
      </ContentContainer>
    </NavContainer>
  );
};

export default Header;
