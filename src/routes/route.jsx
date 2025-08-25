import { createBrowserRouter } from "react-router";
import App from "../App";
import Love from "../pages/Love";
import Feature from "../pages/Feature";
import Series from "../pages/Series";
import Home from "../pages/Home.jsx";
import {adminRoute} from "../admin/routes/adminRoute.jsx";
import Register from "../pages/Register.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index:true,
        Component: Home,
      },
      {
        path: "love",
        Component: Love,
      },
      {
        path: "phim-le",
        Component: Feature,
      },
      {
        path: "phim-bo",
        Component: Series,
      },
    ]
  },
  {
    path: "register",
    Component: Register,
  },
    ...adminRoute
]);

export default route;
