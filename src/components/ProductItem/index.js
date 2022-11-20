import Header from "../Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import { ProductEl, ContentEl } from "./styledComponents";
import productCartContext from "../../context/productContext";
import "./index.css";

const ProductItem = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const fetchProducts = async () => {
      const url =
        "https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json";
      const response = await fetch(url);
      const result = await response.json();
      if (response.ok) {
        const filteredData = result.filter((each) => each.brand === id);
        const newData = filteredData.map((each) => ({ ...each, quantity: 1 }));
        setData(newData);
      }
    };
    fetchProducts();
  }, [id]);

  const onDecrementQuantity = (id) => {
    const product = data.filter((each) => each.id === id);
    if (product[0].quantity > 1) {
      const newData = data.map((each) => {
        if (each.id === id) {
          return { ...each, quantity: each.quantity - 1 };
        }
        return each;
      });
      setData(newData);
    }
  };

  const onIncrementQuantity = (id) => {
    const newData = data.map((each) => {
      if (each.id === id) {
        return { ...each, quantity: each.quantity + 1 };
      }
      return each;
    });
    setData(newData);
  };

  return (
    <productCartContext.Consumer>
      {(value) => {
        const { addCartItem } = value;
        return (
          <>
            <Header />
            <ProductEl>
              <ContentEl>
                {data !== [] ? (
                  <>
                    <h1 className="products-heading">Products of {id}</h1>
                    <ul className="products-list-container">
                      {data.map((each) => (
                        <li className="products-item" key={each.id}>
                          <img
                            src={each.icon}
                            alt={each.name}
                            className="products-image"
                          />
                          <div>
                            <p className="products-name">{each.brand}</p>
                            <p className="product-price">Price: {each.price}</p>
                            <div className="quantity-container">
                              <button
                                type="button"
                                className="quantity-controller-button"
                                onClick={() => onDecrementQuantity(each.id)}
                              >
                                <BsDashSquare className="quantity-controller-icon" />
                              </button>
                              <p className="quantity">{each.quantity}</p>
                              <button
                                type="button"
                                className="quantity-controller-button"
                                onClick={() => onIncrementQuantity(each.id)}
                              >
                                <BsPlusSquare className="quantity-controller-icon" />
                              </button>
                            </div>
                            <button
                              type="button"
                              className="button add-to-cart-btn"
                              onClick={() => addCartItem(each)}
                            >
                              ADD TO CART
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <h1>error 404</h1>
                )}
              </ContentEl>
            </ProductEl>
          </>
        );
      }}
    </productCartContext.Consumer>
  );
};
export default ProductItem;
