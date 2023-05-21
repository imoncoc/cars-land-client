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
import MyToys from "../components/AllAboutToys/MyToys/MyToys";
import UpdateToys from "../components/AllAboutToys/UpdateToys/UpdateToys";
import PrivateRoutes from "./PrivateRoutes";

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
        element: <AllToys></AllToys>
      },
      {
        path: "single-toy/:id",
        element: <PrivateRoutes>
          <SingleToyDetails></SingleToyDetails>
        </PrivateRoutes>,
        loader: ({ params }) => fetch(`https://cars-land-assignment-11-imoncoc.vercel.app/toy/${params.id}`),
      },
      {
        path: "my-toys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "add-toys",
        element: (
          <PrivateRoutes>
            <AddToys></AddToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "update-toys/:id",
        element: (
          <PrivateRoutes>
            <UpdateToys></UpdateToys>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://cars-land-assignment-11-imoncoc.vercel.app/toy/${params.id}`),
      },
    ],
  },
]);

export default router