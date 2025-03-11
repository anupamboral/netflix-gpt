import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./LogIn";
import Browse from "./Browse";

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
  //* onAuthStateChange() is moved to the header because we needed to use the navigate function inside it which could be only possible if we would place it inside the header component
  return (
    <div className="relative">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
