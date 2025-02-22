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
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
