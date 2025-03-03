import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./LogIn";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
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
      } else {
        //* this else block gets executed when the user signs out
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
