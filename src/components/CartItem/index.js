import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

import { useDetails } from "../../context/productContext";

import "./index.css";

const CartItem = (props) => {
  const data = useDetails();
  const { cartItemDetails } = props;
  const { id, name, brand, quantity, price, icon } = cartItemDetails;
  const {
    removeCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  } = data;
  const totalPrice = price * quantity;
  return (
    <li className="cart-item">
      <img className="cart-product-image" src={icon} alt={name} />
      <div className="cart-item-details-container">
        <div className="cart-product-title-brand-container">
          <p className="cart-product-title">{name}</p>
          <p className="cart-product-brand">by {brand}</p>
        </div>
        <div className="cart-quantity-container">
          <button
            type="button"
            className="quantity-controller-button"
            testid="minus"
            onClick={() => decrementCartItemQuantity(id)}
          >
            <BsDashSquare color="#52606D" size={12} />
          </button>
          <p className="cart-quantity">{quantity}</p>
          <button
            type="button"
            className="quantity-controller-button"
            testid="plus"
            onClick={() => incrementCartItemQuantity(id)}
          >
            <BsPlusSquare color="#52606D" size={12} />
          </button>
        </div>
        <div className="total-price-remove-container">
          <p className="cart-total-price">Rs {totalPrice}/-</p>
          <button
            className="remove-button"
            type="button"
            onClick={() => removeCartItem(id)}
          >
            Remove
          </button>
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={() => removeCartItem(id)}
        testid="remove"
      >
        <AiFillDelete color="#616E7C" size={20} />
      </button>
    </li>
  );
};

export default CartItem;
