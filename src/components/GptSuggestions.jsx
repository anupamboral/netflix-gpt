import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import ShimmerUi from "./ShimmerUi";

const GptSuggestions = () => {
  const movieSuggestions = useSelector(
    (store) => store.gptSearch?.movieSuggestions
  );
  const movieQuery = useSelector((store) => store.gptSearch?.movieQuery);

  if (!movieSuggestions) return <ShimmerUi />;
  console.log(movieSuggestions);
  return (
    <div className="bg-black/80 overflow-x-hidden mt-10">
      {movieQuery && (
        <h1 className=" lg:text-4xl text-2xl lg:pl-6 pl-6 lg:ml-4 pt-2  pb-4 bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold">
          Search results for: `{movieQuery}`
        </h1>
      )}
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
