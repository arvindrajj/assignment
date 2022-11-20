import Header from "../Header";
import { useDetails } from "../../context/productContext";
import { CartEl, ContentCont } from "./styledComponent";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";
import "./index.css";
const Cart = () => {
  const data = useDetails();
  const { removeAllCartItems, cartList } = data;
  const showEmptyView = data.cartList.length === 0;
  return (
    <>
      <Header />
      <CartEl>
        <ContentCont>
          <div className="cart-container">
            {showEmptyView ? (
              <div className="cart-empty-view-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                  className="cart-empty-img"
                  alt="cart empty"
                />
                <h1 className="cart-empty-heading">Your Cart Is Empty</h1>
                <Link to="/brands">
                  <button type="button" className="shop-now-btn">
                    Shop Now
                  </button>
                </Link>
              </div>
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={removeAllCartItems}
                >
                  Remove All
                </button>
                <ul className="cart-list">
                  {cartList.map((each) => (
                    <CartItem key={each.id} cartItemDetails={each} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ContentCont>
      </CartEl>
    </>
  );
};

export default Cart;
