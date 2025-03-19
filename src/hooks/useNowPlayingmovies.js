import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
//* custom hook we built to fetch now playing movies and storing it in the redux store(movie slice)
const useNowPlayingMovies = () => {
  //* for memoization to prevent making unnecessary api calls when data is already present
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    nowPlayingMovies === null && getNowPlayingMovies(); //*using memoization
  }, []);
};

export default useNowPlayingMovies;
