import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const LogIn = () => {
  const [togglePassword, setTogglePassword] = useState(true); //* for showing and hiding password in input box.
  const [isSignIn, setIsSignIn] = useState(true);
  //* using useRef hook for referencing email and password input elms for validation.
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null); //* for displaying the error message on the ui
  const dispatch = useDispatch();
  const handleForm = () => {
    console.log(email.current.value, password.current.value);
    const message = checkValidData(email.current.value, password.current.value); //* if validation fails it will return the error message but if it pass then it will return null.
    setErrorMessage(message);

    if (message) return; //*if message has truthy value that means the validation is failed so we will so early return in that case.

    if (!isSignIn) {
      //* for Sign up logic(as email and password are useref hooks that why to pass the value we have to write email.current.value)
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //* printing the user object to the console after he signs up
          console.log(user);

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/112706236?s=400&u=5d8f5120dfb825c070e34bbb3195186293ec3560&v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser; //* auth.currentUser is providing us the updated user after updating the name and photo.
              //*updating the store
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              console.error(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //* showing the error message on the ui if any error happens
          setErrorMessage(`Error -${errorCode}: ${errorMessage}`);
        });
    }
    if (isSignIn) {
      //*for Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //* printing the user object to the console after he signs up
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //* showing the error message on the ui if any error happens
          setErrorMessage(`Error -${errorCode}: ${errorMessage}`);
        });
    }
    // console.log(errorMessage);
  };
  return (
    <div className="text-xl  flex ">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          alt="background-image"
          className=" h-lvh lg:h-[150dvh] w-screen"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col p-12 lg:w-[500px]  w-80 h-[400px]  lg:h-[600px] mb-0   absolute  lg:left-[500px] left-10  md:left-1/3 top-24     bg-black opacity-80"
        >
          <h1 className="text-white text-4xl font-bold mb-2 ml-2">
            {isSignIn ? "Sign In" : "Sign up"}
          </h1>

          {!isSignIn && (
            <input
              ref={name}
              className="bg-black text-amber-50 text-sm p-4 m-2 border-2 mb-4 rounded-md hover:border-b-cyan-400"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="bg-black text-amber-50 text-lg p-4 m-2 border-2 mb-4 rounded-md hover:border-b-cyan-400"
            type="email"
            placeholder="Email address"
          />
          <input
            ref={password}
            className="bg-black text-amber-50 p-4 text-lg m-2  border-2 rounded-md  hover:border-b-cyan-400 "
            type={togglePassword ? "password" : "text"}
            placeholder="password"
          />
          <label className="text-sm text-amber-50">
            <input
              onClick={() => setTogglePassword(!togglePassword)}
              type="checkbox"
              className="mr-2 w-5 h-5 ml-2"
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
            className="bg-red-600 text-white p-3 text-sm m-2 mt-4 rounded-sm"
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
