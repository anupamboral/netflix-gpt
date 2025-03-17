import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const gptSearchShow = useSelector((store) => store.gptSearch.showGptSearch); //* for toggling the gptSearch button text to "Home Page" when the user opens the gptSearch component by clicking.

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };
  const [showSignOut, setShowSignOut] = useState(false);
  const navigate = useNavigate();

  //* onAuthStateChanged() gets called when ever the user sign in , sign up , sign out, basically whenever authentication state changes. So if we use this we don't need to dispatch the action multiple timed here and there. We can do the dispatch action to add or remove the user to redux store inside this function.
  useEffect(() => {
    //*for clean up of this onAuthStateChange event listener it returns a unsubscribe function , so we can use it to cleanup this effect when our component unmounts.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //* this block gets executed when the user signs in or sign up
        // console.log("auth change");
        // console.log(user);
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        //* if showMovieDetails is true then only display the /movieDetails page

        navigate("/browse"); //* do confirm validation first then only redirecting to /browse page.
      } else {
        //* this else block gets executed when the user signs out
        dispatch(removeUser());
        navigate("/"); //*if the user is not signed in and he manually tries to access the browse page he will be automatically directed to the log in page
      }
    });

    //* for cleanup
    return () => unsubscribe();
  }, []);

  const user = useSelector((store) => store.user);
  //* to sign out when user click on sign out button.
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened
        console.error(error);
      });
  };
  return (
    <div className="fixed p-2 pr-1 z-10 top-0    bg-gradient-to-b from-black to-75% flex justify-between w-[99dvw] overflow-x-hidden">
      <img className="w-34 h-20" src={LOGO} />
      {user && (
        <div className="nav p-2 pr-0  lg:mr-8 mr-1">
          <div className="flex">
            <button
              className=" p-2 m-2 mb-0 mt-0 border-2 py-1 border-cyan-600 hover:border-fuchsia-600 hover:shadow-2xl shadow-fuchsia-600 bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold lg:text-2xl text-lg/4 rounded-3xl hover:bg-gradient-to-r hover:from-pink-500 hover:via-cyan-500 hover:to-amber-300"
              type="button"
              onClick={handleGptSearch}
            >
              {gptSearchShow ? "Home Page✨" : "Gpt Search✨"}
            </button>

            <img
              src={USER_AVATAR}
              alt="user-icon"
              className="w-18 h-10 pr-1 "
              onClick={() => setShowSignOut(!showSignOut)}
            />
            <button type="button" onClick={() => setShowSignOut(!showSignOut)}>
              ▼
            </button>
          </div>
          {showSignOut && (
            <div>
              <button
                onClick={handleSignout}
                className="text-white text-sm absolute   bg-red-700 opacity-80 w-18 p-2 lg:ml-48 ml-30 px-1 z-40 font-bold mr-2 whitespace-nowrap rounded-3xl"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
