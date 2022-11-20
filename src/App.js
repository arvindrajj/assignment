import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Brands from "./components/Brands";
import ProductItem from "./components/ProductItem";
import productContext from "./context/productContext";
import "./App.css";

const App = () => {
  const [productsData, setProductsData] = useState();
  return (
    <productContext.Provider
      value={{
        productsData,
        setProductsData,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:id" element={<ProductItem />} />
      </Routes>
    </productContext.Provider>
  );
};

export default App;
