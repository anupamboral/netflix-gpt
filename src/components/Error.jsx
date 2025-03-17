import { Link, useRouteError } from "react-router-dom";
import { LOG_IN_PAGE_BACKGROUND_IMAGE } from "../utils/constants";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="">
      <div>
        <img
          src={LOG_IN_PAGE_BACKGROUND_IMAGE}
          alt="background-image"
          className=" h-[150dvh] w-screen"
        />
        <div className="absolute text-white lg:ml-30 ml-6 lg:text-4xl  text-2xl top-20 ">
          <p>Error: {error.message}</p>
          <Link to="" reloadDocument>
            <button className="bg-gradient-to-r mt-4 from-cyan-600 to-fuchsia-700 p-2 rounded-lg border-2 border-double border-white">
              Reload
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
