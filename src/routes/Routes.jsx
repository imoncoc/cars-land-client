import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home/Home";
import Blogs from "../components/Blogs/Blogs";
import ErrorPage from "../shared/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddToys from "../components/AllAboutToys/AddToys/AddToys";
import AllToys from "../components/AllAboutToys/AllToys/AllToys";
import SingleToy from "../components/AllAboutToys/SingleToy/SingleToy";
import SingleToyDetails from "../components/AllAboutToys/SingleToyDetails/SingleToyDetails";

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
        loader: () => fetch("http://localhost:5000/allToys"),
      },
      {
        path: "single-toy/:id",
        element: <SingleToyDetails></SingleToyDetails>,
        loader: ({params}) =>
          fetch(`http://localhost:5000/toy/${params.id}`),
      },
      {
        path: "add-toys",
        element: <AddToys></AddToys>,
      },
    ],
  },
]);

export default router