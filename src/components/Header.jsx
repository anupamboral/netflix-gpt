import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const [showSignOut, setshowSignOut] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //* onAuthStateChanged() gets called when ever the user sign in , sign up , sign out, basically whenever authentication state changes. So if we use this we don't need to dispatch the action multiple timed here and there. We can do the dispatch action to add or remove the user to redux store inside this function.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //* this block gets executed when the user signs in or sign up
        console.log("auth change");
        console.log(user);
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
      }
    });
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
      <img
        className="w-34 h-20"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div className="nav p-2  mr-8">
          <div className="flex">
            <img
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
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
