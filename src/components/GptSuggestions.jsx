import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptSuggestions = () => {
  const movieSuggestions = useSelector(
    (store) => store.gptSearch?.movieSuggestions
  );
  if (!movieSuggestions) return;
  console.log(movieSuggestions);
  return (
    <div className="bg-black overflow-x-hidden mt-10">
      {movieSuggestions.map((movieList) => (
        <MoviesList
          key={movieList[0].id}
          title={movieList[0].title}
          movies={movieList}
        />
      ))}
    </div>
  );
};

export default GptSuggestions;
