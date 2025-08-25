import Admin from "../pages/Admin.jsx";
import Movies from "../pages/Movies.jsx";
import Users from "../pages/Users.jsx";
export const adminRoute = [
    {
        path: "admin",
        Component: Admin,
        children:[
            {
                path: "movies",
                Component: Movies,
            },
            {
                path: "users",
                Component: Users,
            }
        ]
    }
]