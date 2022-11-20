import { createContext, useContext } from "react";
const productContext = createContext({
  productsData: [],
  setProductsData: () => {},
});

export const useDetails = () => useContext(productContext);

export default productContext;
