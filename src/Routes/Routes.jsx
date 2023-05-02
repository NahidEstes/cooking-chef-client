import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blog/Blogs";
import ChefRecipe from "../Pages/ChefRecipe/ChefRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/blogs",
        element: <Blogs />,
      },

      {
        path: "/chef-info/:id",
        element: <ChefRecipe />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef-info/${params.id}`),
      },
    ],
  },
]);

export default router;
