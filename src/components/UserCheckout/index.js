import { HomeEl, ContentEl } from "./styledComponents";

const Home = () => {
  const msg = 'hello arvind'
  return () => {
    <>
      <HomeEl>
        <ContentEl>
          <h1>{msg}</h1>
        </ContentEl>
      </HomeEl>
    </>
  }
}
export default Home