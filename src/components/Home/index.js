import { useNavigate } from "react-router-dom";
import {
  HomeEl,
  Content,
  ContentCont,
  Heading,
  Para,
  Button,
  HomeImage,
} from "./styledComponents";
import Header from "../Header";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <HomeEl>
        <ContentCont>
          <Content>
            <Heading>Find The Products on your Favourite Brand</Heading>
            <Para>
              Millions of people are searching for products on E-commerce site,
              product information, product reviews, Find new products on top
              Brands.
            </Para>
            <Button onClick={() => navigate("/brands", { replace: true })}>
              Brands
            </Button>
          </Content>
          <HomeImage
            src="https://webdesignkl.my/wp-content/uploads/2020/08/ecommerce-2048x1363.png"
            alt="E-Commerce"
          />
        </ContentCont>
      </HomeEl>
    </>
  );
};
export default Home;
