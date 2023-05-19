import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home/Home";
import Blogs from "../components/Blogs/Blogs";
import ErrorPage from "../shared/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddToys from "../components/AllAboutToys/AddToys/AddToys";
import AllToys from "../components/AllAboutToys/AllToys/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "all-toys",
        element: <AllToys></AllToys>,
        loader: () => 
          fetch("https://cars-land-assignment-11.vercel.app/allToys"),
      },
      {
        path: "add-toys",
        element: <AddToys></AddToys>,
      },
    ],
  },
]);

export default router