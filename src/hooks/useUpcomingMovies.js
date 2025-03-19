import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
//* custom hook we built to fetch now playing movies and storing it in the redux store(movie slice)
const useUpcomingMovies = () => {
  //* for memoization to prevent making unnecessary api calls when data is already present
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    upcomingMovies === null && getUpcomingMovies(); //*using memoization
  }, []);
};

export default useUpcomingMovies;
