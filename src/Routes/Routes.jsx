import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //   {
      //     path: "/about",
      //     element: <About />,
      //   },
      //   {
      //     path: "/blogs",
      //     element: <Blogs />,
      //   },

      //   {
      //     path: "/login",
      //     element: <Login />,
      //   },
      //   {
      //     path: "/register",
      //     element: <Register />,
      //   },
    ],
  },
]);

export default router;
