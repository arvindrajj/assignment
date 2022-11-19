import { HomeEl, ContentEl } from "./styledComponents";

const Home = () => {
  const msg = "Hello Arvind";
  return (
    <>
      <HomeEl>
        <ContentEl>{msg}</ContentEl>
      </HomeEl>
    </>
  );
};
export default Home;
