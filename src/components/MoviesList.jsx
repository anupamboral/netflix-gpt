import { useRef } from "react";
import MovieCard from "./MovieCard";
import { div } from "motion/react-client";

const MoviesList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(scrollRef.current.children[0]).width
      );
      scrollRef.current.scrollLeft = scrollLeft - itemWidth * 1;
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(scrollRef.current.children[0]).width
      );
      scrollRef.current.scrollLeft = scrollLeft + itemWidth * 1;
    });
  };
  console.log(title, movies);
  return (
    <div className=" mb-10">
      <div className=" ">
        <h1 className=" lg:text-4xl text-2xl pl-6 pt-2">{title}</h1>
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
