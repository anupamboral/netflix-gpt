import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const LogIn = () => {
  const [togglePassword, setTogglePassword] = useState(true); //* for showing and hiding password in input box.
  const [isSignIn, setIsSignIn] = useState(true);
  //* using useRef hook for referencing email and password input elms for validation.
  const email = useRef(null);
  const password = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null); //* for displaying the error message on the ui

  const handleForm = () => {
    console.log(email.current.value, password.current.value);
    setErrorMessage(
      checkValidData(email.current.value, password.current.value)
    );
    console.log(errorMessage);
  };
  return (
    <div className="text-xl relative flex ">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          alt="background-image"
          className=" h-lvh lg:h-[150dvh] w-full"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col p-12 lg:w-[400px]  w-80 h-[400px]  lg:h-[600px] mb-0   absolute  lg:left-[400px] left-10  md:left-1/3 top-24     bg-black opacity-80"
        >
          <h1 className="text-white text-3xl font-bold mb-2 ml-2">
            {isSignIn ? "Sign In" : "Sign up"}
          </h1>

          {!isSignIn && (
            <input
              className="bg-black text-amber-50 text-sm p-2 m-2 border-2 mb-4 rounded-md hover:border-b-cyan-400"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="bg-black text-amber-50 text-sm p-2 m-2 border-2 mb-4 rounded-md hover:border-b-cyan-400"
            type="email"
            placeholder="Email address"
          />
          <input
            ref={password}
            className="bg-black text-amber-50 p-2 text-sm m-2  border-2 rounded-md  hover:border-b-cyan-400 "
            type={togglePassword ? "password" : "text"}
            placeholder="password"
          />
          <label className="text-sm text-amber-50">
            <input
              onClick={() => setTogglePassword(!togglePassword)}
              type="checkbox"
              className="mr-2 ml-2"
            />
            Show Password
          </label>
          {errorMessage && (
            <span className="p-2 font-semibold  text-xs ml-2 text-red-600">
              !!! {errorMessage}
            </span>
          )}
          <button
            onClick={handleForm}
            type="submit"
            className="bg-red-600 text-white p-1 text-sm m-2 mt-4 rounded-sm"
          >
            {isSignIn ? "Sign In" : "Sign up"}
          </button>

          <p
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-white mx-auto text-sm underline cursor-pointer hover:text-blue-600"
          >
            {isSignIn
              ? " New to Netflix? Sign Up now"
              : "Already a user? Sign In now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
