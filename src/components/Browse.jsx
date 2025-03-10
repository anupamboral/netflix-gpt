import useNowPlayingmovies from "../hooks/usenowPlayingmovies";
import Header from "./Header";

const Browse = () => {
  //* we extracted the logic of fetching the data from the api and storing it to the store into a custom hook to make this component cleaner, we named that hook useNowPlayingMovies();
  useNowPlayingmovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
