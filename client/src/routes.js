import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, WORKER_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin/Admin";
import Worker from "./pages/Worker";
import Auth from "./pages/Auth";

export const adminRoutes =[
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Admin/>
    },
    {
        path: WORKER_ROUTE,
        element: <Worker/>
    }
]

export const workerRoutes = [
    {
        path: WORKER_ROUTE,
        element: <Worker/>
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    }
]