import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Construction from "../pages/ProjectsDetails/DressRecycle/Construction";
import DressRecycle from "../pages/ProjectsDetails/DressRecycle/DressRecycle";
import Schooling from "../pages/ProjectsDetails/DressRecycle/Schooling";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/dress-recycle",
                element: <DressRecycle></DressRecycle>
            },
            {
                path: "/construction",
                element: <Construction></Construction>
            },
            {
                path: "/schooling",
                element: <Schooling></Schooling>
            },
        ]
    },
    {
        path: "/blog",
        element: <Blog></Blog>
    }
]);

export default router;