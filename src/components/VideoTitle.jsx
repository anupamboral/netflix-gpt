import { IMG_CDN_URL } from "../utils/constants";

// eslint-disable-next-line react/prop-types
const VideoTitle = ({ moviePoster, movieDetails }) => {
  // console.log(moviePoster, movieDetails);
  return (
    <div className="pt-20 lg:pt-40 lg:pl-24 pl-6 absolute text-white w-[99dvw] min-h-[30rem] aspect-video bg-gradient-to-r from-black to-50%">
      <img
        src={IMG_CDN_URL + moviePoster}
        alt=""
        className=" lg:w-36 lg:h-36 md:w-36 md:h-36 w-24 h-24 pt-4 lg:mt-36  mt-20 lg:ml-16 ml-6 rounded-3xl"
      />
      <p className="lg:w-1/4 w-6/12 mt-4 lg:text-lg md:text-lg text-xs font-semibold selection:text-cyan-500">
        {movieDetails}
      </p>
      <div className="flex gap-4">
        <button
          type="button"
          className="lg:w-32 w-24 h-10 p-5 lg:px-20 px-14 flex items-center justify-center text-white bg-black font-bold text-xl rounded-lg mt-4 hover:opacity-80 hover:shadow-cyan-500 hover:shadow-xl selection:text-cyan-500 border-1 border-cyan-500"
        >
          <span className="mr-2">▷</span>Play
        </button>
        <button
          type="button"
          className="lg:w-30 w-24 h-9 p-5 lg:px-20 px-14 flex items-center justify-center text-white bg-transparent border-1 border-white font-bold text-xl rounded-lg mt-4 hover:opacity-80 hover:shadow-cyan-500 hover:shadow-xl selection:text-cyan-500"
        >
          <span className="mr-2 opacity-100 text-white">More</span>Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
