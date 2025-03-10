import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const [showSignOut, setshowSignOut] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <div className="fixed p-2 z-10 top-0    bg-gradient-to-b from-black flex justify-between w-[99dvw] overflow-x-hidden">
      <img className="w-34 h-20" src={LOGO} />
      {user && (
        <div className="nav p-2  mr-8">
          <div className="flex">
            <img
              src={USER_AVATAR}
              alt="user-icon"
              className="w-16 h-10 mr-1 "
              onClick={() => setshowSignOut(!showSignOut)}
            />
            <button type="button" onClick={() => setshowSignOut(!showSignOut)}>
              ▼
            </button>
          </div>
          {showSignOut && (
            <div>
              <button
                onClick={handleSignout}
                className="text-white text-sm absolute  bg-black hover:bg-red-700 opacity-80 w-16 p-2  z-40 font-bold mr-2"
              >
                SignOut
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
