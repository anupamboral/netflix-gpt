// eslint-disable-next-line react/prop-types
const VideoTitle = ({ moviePoster, movieDetails }) => {
  // console.log(moviePoster, movieDetails);
  return (
    <div className="pt-20 lg:pt-40 lg:pl-24 pl-6 absolute text-white w-[99dvw] min-h-[35rem] aspect-video bg-gradient-to-r from-black to-50%">
      <img
        src={"https://image.tmdb.org/t/p/w500/" + moviePoster}
        alt=""
        className=" lg:w-36 lg:h-36 md:w-36 md:h-36 w-20 h-20 pt-4  lg:ml-16 ml-6 rounded-3xl"
      />
      <p className="lg:w-1/4 w-6/12 mt-4 lg:text-lg md:text-lg text-xs font-semibold">
        {movieDetails}
      </p>
      <div className="flex gap-4">
        <button
          type="button"
          className="lg:w-32 w-24 h-10 p-6 lg:px-20 px-14 flex items-center justify-center text-white bg-black font-bold text-xl rounded-lg mt-4 hover:opacity-80"
        >
          <span className="mr-2">▷</span>Play
        </button>
        <button
          type="button"
          className="lg:w-30 w-24 h-9 p-5 lg:px-20 px-14 flex items-center justify-center text-white bg-transparent border-2 border-white font-bold text-xl rounded-lg mt-4 hover:opacity-80"
        >
          <span className="mr-2 opacity-100 text-white">More</span>Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
