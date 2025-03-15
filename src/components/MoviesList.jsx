import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  // console.log(title, movies);
  return (
    <div className=" mb-10">
      <div className=" ">
        <h1 className=" lg:text-4xl text-2xl lg:pl-6 pl-6 lg:ml-4 pt-2  bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold">
          {title}
        </h1>
        <div className=" flex overflow-x-scroll ">
          <div className="cards flex shrink-0 lg:pl-6 pl-2">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
