import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Brands from "./components/Brands";
import ProductItem from "./components/ProductItem";
import Cart from "./components/CartReview";
import productCartContext from "./context/productContext";
import "./App.css";

const App = () => {
  const [cartList, setCartList] = useState([]);

  const addCartItem = (product) => {
    const isProductIncludes = cartList.some((each) => each.id === product.id);
    if (isProductIncludes) {
      const newCartList = cartList.map((each) => {
        const updateQuantity = each.quantity + product.quantity;
        if (each.id === product.id) {
          return { ...each, quantity: updateQuantity };
        }
        return each;
      });
      setCartList(newCartList);
    } else {
      setCartList([...cartList, product]);
    }
  };

  const removeCartItem = (id) => {
    const newCartList = cartList.filter((each) => each.id !== id);
    setCartList(newCartList);
  };

  const incrementCartItemQuantity = (id) => {
    const newCartList = cartList.map((each) => {
      if (each.id === id) {
        return { ...each, quantity: each.quantity + 1 };
      }
      return each;
    });
    setCartList(newCartList);
  };

  const decrementCartItemQuantity = (id) => {
    const productObject = cartList.find((each) => each.id === id);
    if (productObject.quantity <= 1) {
      removeCartItem(id);
    } else {
      const newCartList = cartList.map((each) => {
        if (each.id === id) {
          return { ...each, quantity: each.quantity - 1 };
        }
        return each;
      });
      setCartList(newCartList);
    }
  };

  const removeAllCartItems = () => {
    setCartList([]);
  };

  return (
    <productCartContext.Provider
      value={{
        cartList,
        addCartItem: addCartItem,
        removeCartItem: removeCartItem,
        incrementCartItemQuantity: incrementCartItemQuantity,
        decrementCartItemQuantity: decrementCartItemQuantity,
        removeAllCartItems: removeAllCartItems,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:id" element={<ProductItem />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </productCartContext.Provider>
  );
};

export default App;
