import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

// eslint-disable-next-line no-unused-vars
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
      ]
    },
  ]);

