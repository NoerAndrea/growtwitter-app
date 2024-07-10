import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Login} from '../pages/Login';
import { Feed } from '../pages/Feed';
import { Explore } from '../pages/Explorer';
import { Profile } from '../pages/Profile';

//definição de todos os paths que a app vai ter
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/feed",
        element: <Feed/>
    },
    {
        path: "/explore",
        element: <Explore/>
    },
    {
        path: "/profile",
        element: <Profile/>
    },
]);

//definição do componente das rotas
export function AppRoutes(){
    return(
        <RouterProvider router={router}/>
    )
}