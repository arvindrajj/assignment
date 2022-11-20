// import { useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDetails } from "../../context/productContext";
import {
  NavContainer,
  ContentContainer,
  WebsiteLogo,
  LgNavMenu,
  SmNavMenu,
  LinkItem,
} from "./styledComponent";
import "./index.css";
const Header = () => {
  // const location = useLocation();
  const data = useDetails();
  const count = data.cartList.length > 0 ? data.cartList.length : 0;
  return (
    <NavContainer>
      <ContentContainer>
        <LinkItem to="/">
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
            <p className="count">{count}</p>
          </LinkItem>
        </LgNavMenu>
        <SmNavMenu>
          <LinkItem to="/">Home</LinkItem>
          <LinkItem to="/brands">Brands</LinkItem>
          <LinkItem to="/cart">
            cart
            <AiOutlineShoppingCart height="30" width="30" color="#000000" />
            <p className="count">{count}</p>
          </LinkItem>
        </SmNavMenu>
      </ContentContainer>
    </NavContainer>
  );
};

export default Header;
