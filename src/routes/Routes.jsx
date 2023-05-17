import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home/Home";
import Blogs from "../components/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router