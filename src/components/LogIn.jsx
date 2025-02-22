import Header from "./Header";

const LogIn = () => {
  return (
    <div className="text-xl relative">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          alt="background-image"
          className=" h-[100dvh] w-full"
        />
      </div>
      <form className="flex flex-col w-80 lg:w-1/4 lg:h-72 mb-0  absolute lg:top-52 lg:left-[550px] top-24 left-10  bg-black ">
        <input
          className="bg-black text-amber-50 p-2 m-2 border-2 mb-8 hover:border-b-cyan-400"
          type="email"
          placeholder="Email address"
        />
        <input
          className="bg-black text-amber-50 p-2 m-2  border-2 hover:border-b-cyan-400 "
          type="password"
          placeholder="password"
        />
        <button type="submit" className="bg-red-600 p-2 m-2 mt-10 lg:mt-20">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogIn;
