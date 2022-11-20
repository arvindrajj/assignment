import { useState, useEffect } from "react";
import Header from "../Header";
import Loader from "react-loader-spinner";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { LoaderContainer, BrandsEl, ContentEl } from "./styledComponents";
import "./index.css";

const apiStatusConstance = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Brands = () => {
  const [productsData, setProductsData] = useState({
    apiStatus: apiStatusConstance.initial,
    data: [],
  });
  useEffect(() => {
    const fetchUrl = async () => {
      setProductsData({ apiStatus: apiStatusConstance.loading });
      const url =
        "https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json";
      try {
        const response = await fetch(url);
        const result = await response.json();
        setProductsData({
          apiStatus: apiStatusConstance.success,
          data: result,
        });
      } catch (e) {
        setProductsData({ apiStatus: apiStatusConstance.failure });
      }
    };
    fetchUrl();
  }, []);

  const renderLoaderView = () => (
    <LoaderContainer className="page-loader-container" testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </LoaderContainer>
  );

  const renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://res.cloudinary.com/dbq6ql3ik/image/upload/v1646452229/Group_7522something_went_worng_qvk5vj.jpg"
        alt="failure view"
        className="failure-view-image"
      />
      <h1 className="failure-view-heading">
        Something went wrong. Please try again
      </h1>
      <button type="button" className="failure-view-button">
        Try again
      </button>
    </div>
  );

  const renderSuccessView = () => {
    const { data } = productsData;
    const brands = data.map((each) => each.brand);
    const uniqueBrands = brands.filter(
      (each, index, array) => array.indexOf(each) === index
    );
    const uniqueBrandArray = [];
    const getProductCount = (brand) => {
      let count = 0;
      brands.forEach((each) => {
        if (each === brand) {
          count += 1;
        }
      });
      return count;
    };
    const getImageUrl = (item) => {
      if (item === "Samsung") {
        return "https://th.bing.com/th/id/OIP.9oCIolbn1TtW1VgCM5INgwHaEK?pid=ImgDet&rs=1";
      } else if (item === "Sony") {
        return "https://th.bing.com/th/id/OIP.xdXbi1WX38I-3xbU86OYdAHaEK?pid=ImgDet&rs=1";
      } else {
        const result = data.filter((each) => each.brand === item);
        return result[0].icon;
      }
    };

    uniqueBrands.map((each) =>
      uniqueBrandArray.push({
        id: v4(),
        brand: each,
        productCount: getProductCount(each),
        imageUrl: getImageUrl(each),
      })
    );
    return (
      <>
        <h1 className="brands-heading">Brands</h1>
        <ul className="brands-list-container">
          {uniqueBrandArray.map((each) => (
            <li className="brands-item" key={each.id}>
              <Link to={`/brands/${each.brand}`} className="brands-item">
                <img
                  src={each.imageUrl}
                  alt={each.brand}
                  className="brands-image"
                />
                <div>
                  <p className="brands-name">{each.brand}</p>
                  <p className="product-count">
                    Product Count: {each.productCount}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const renderBrands = () => {
    const { apiStatus } = productsData;
    switch (apiStatus) {
      case apiStatusConstance.loading:
        return renderLoaderView();
      case apiStatusConstance.success:
        return renderSuccessView();
      case apiStatusConstance.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <BrandsEl>
        <ContentEl>{renderBrands()}</ContentEl>
      </BrandsEl>
    </>
  );
};

export default Brands;
