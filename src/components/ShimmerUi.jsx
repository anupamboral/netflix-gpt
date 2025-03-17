const ShimmerUi = () => {
  return (
    <div className=" ">
      <div className="h-[100dvh]  w-[100dvw] bg-gray-900 rounded-md ">
        <div className="pt-10 lg:pt-20 lg:pl-24 pl-6 absolute text-white w-[100dvw] min-h-[30rem] aspect-video bg-gradient-to-r from-black to-50% animate-pulse">
          <div
            alt=""
            className=" lg:w-36 lg:h-36 md:w-36 md:h-36 w-24 h-24 pt-4 lg:mt-36  animate-pulse  mt-10 lg:ml-16 bg-cyan-400 ml-6 rounded-3xl"
          ></div>
          <div className="lg:w-3/8 w-6/12 h-32 mt-4 lg:text-lg bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 rounded-3xl"></div>
          <div className="flex gap-4">
            <div className=" animate-pulselg:w-32 w-24 h-10 p-5 lg:px-20 px-14 flex items-center justify-center text-white bg-black font-bold text-xl rounded-lg mt-4 hover:opacity-80 hover:shadow-cyan-500 hover:shadow-xl selection:text-cyan-500 border-1 border-cyan-500 ">
              <span className="mr-2">▷</span>Play
            </div>
            <button
              type="button"
              className="lg:w-30 w-24 h-9 p-5 lg:px-20 px-14 flex items-center justify-center text-white bg-transparent border-1 border-white font-bold text-xl rounded-lg mt-4 hover:opacity-80 "
            >
              <span className="mr-2 opacity-100 text-white">More</span>Info
            </button>
          </div>
        </div>
      </div>
      <div className="lg:-mt-[8%] md:mt-0 -mt-72  bg-gray-900   ">
        <div className=" ">
          <div className="w-72 lg:pl-6 pl-6 lg:ml-4 pt-2  bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 inline-block text-transparent bg-clip-text text-4xl whitespace-nowrap font-semibold animate-pulse">
            Now Playing
          </div>
          <div className=" flex overflow-x-scroll ">
            <div className="cards flex shrink-0 lg:pl-6 pl-2">
              <div>
                <div className="w-36   lg:h-48 h-36 grow m-4 bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 rounded-3xl animate-pulse"></div>
              </div>
              <div>
                <div className="w-36   lg:h-48 h-36 grow m-4 bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 rounded-3xl animate-pulse"></div>
              </div>
              <div>
                <div className="w-36   lg:h-48 h-36 grow m-4 bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 rounded-3xl animate-pulse"></div>
              </div>
              <div>
                <div className="w-36   lg:h-48 h-36 grow m-4 bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 rounded-3xl animate-pulse"></div>
              </div>
              <div>
                <div className="w-36   lg:h-48 h-36 grow m-4 bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 rounded-3xl animate-pulse"></div>
              </div>
              <div>
                <div className="w-36   lg:h-48 h-36 grow m-4 bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 rounded-3xl animate-pulse"></div>
              </div>
              <div>
                <div className="w-36   lg:h-48 h-36 grow m-4 bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 rounded-3xl animate-pulse"></div>
              </div>
              <div>
                <div className="w-36   lg:h-48 h-36 grow m-4 bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 rounded-3xl animate-pulse"></div>
              </div>
              <div>
                <div className="w-36   lg:h-48 h-36 grow m-4 bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 rounded-3xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUi;
