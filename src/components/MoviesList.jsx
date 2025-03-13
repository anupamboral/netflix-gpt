import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  console.log(title, movies);
  return (
    <div className=" mb-10">
      <div className=" ">
        <h1 className=" lg:text-4xl text-2xl lg:pl-6 pl-6 lg:ml-4 pt-2">
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
