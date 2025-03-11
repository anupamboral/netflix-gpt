// eslint-disable-next-line react/prop-types
const VideoTitle = ({ moviePoster, movieDetails }) => {
  console.log(moviePoster, movieDetails);
  return (
    <div className="mt-20 lg:mt-48 lg:ml-24 ml-6">
      <img
        src={"https://image.tmdb.org/t/p/w500/" + moviePoster}
        alt=""
        className=" w-36 h-36 lg:ml-16 ml-6 rounded-2xl"
      />
      <p className="lg:w-1/4 w-9/12 mt-4 text-lg font-semibold">
        {movieDetails}
      </p>
      <div className="flex gap-4">
        <button
          type="button"
          className="lg:w-32 w-24 h-10 p-6 lg:px-20 px-14 flex items-center justify-center text-white bg-black font-bold text-xl rounded-lg mt-4"
        >
          <span className="mr-2">▷</span>Play
        </button>
        <button
          type="button"
          className="w-32 h-10 p-6 lg:px-20 px-14 flex items-center justify-center text-white bg-slate-500 opacity-70 font-bold text-xl rounded-lg mt-4"
        >
          <span className="mr-2">More</span>Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
