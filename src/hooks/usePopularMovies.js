import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

//* custom hook we built to fetch now playing movies and storing it in the redux store(movie slice)
const usePopularMovies = () => {
  //* for memoization to prevent making unnecessary api calls when data is already present
  const popularMovies = useSelector((store) => store.movie.popularMovies);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=2",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    popularMovies === null && getPopularMovies(); //*using memoization
  }, []);
};

export default usePopularMovies;
