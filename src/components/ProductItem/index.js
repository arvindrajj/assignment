import Header from "../Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductEl, ContentEl } from "./styledComponents";
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
        setData(filteredData);
      }
    };
    fetchProducts();
  }, [id]);
  return (
    <>
      <Header />
      <ProductEl>
        <ContentEl>
          {data !== [] ? (
            <>
              <h1 className="products-heading">Brands</h1>
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
};
export default ProductItem;
