import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {Context} from "../index";
import {adminRoutes, publicRoutes, workerRoutes} from "../routes";
import ErrorPage from "./ErrorPage";

const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {user._user.role === 'ADMIN' && adminRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact/>
            )}

            {user._user.role === "WORKER" && workerRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact/>
            )}
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact/>
            )}

            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    );
};

export default AppRouter;