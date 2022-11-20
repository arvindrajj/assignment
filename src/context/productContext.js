import { createContext, useContext } from "react";
const productCartContext = createContext({
  cartList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
});

export const useDetails = () => useContext(productCartContext);

export default productCartContext;
