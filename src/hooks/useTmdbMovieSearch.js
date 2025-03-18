import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useSearchTmdbMovie = (movie) => {
  const [moviedata, setMoviedata] = useState(null);
  const getTmdbMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setMoviedata(json.results);
  };
  useEffect(() => {
    getTmdbMovie();
  }, []);
  return moviedata;
};
export default useSearchTmdbMovie;
