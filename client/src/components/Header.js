import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useLocation, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, WORKER_ROUTE} from "../utils/consts";

const Header = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()

    const handleWorkerRoute = () => {
        navigate(WORKER_ROUTE)
    }
    const handleAdminRoute = () => {
        navigate(ADMIN_ROUTE)
    }

    return (
        <header
            className="shadow-2xl h-16  px-72 text-blue-500 flex items-center justify-between  bg-transparent">
            <p className="text-2xl select-none">Оптовый склад
            </p>
            {user._isAuth &&
                <div className="d-flex">
                    {
                        user._user.role === "ADMIN" && location.pathname === "/admin" &&
                        <div className="w-44">
                            <button
                                onClick={handleWorkerRoute}
                                className="text-lg  hover:text-blue-700 duration-500"> Панель работника
                            </button>
                        </div>
                    }
                    {
                        user._user.role === "ADMIN" && location.pathname === "/worker" &&
                        <div className="w-44">
                            <button
                                onClick={handleAdminRoute}
                                className="text-lg hover:text-blue-700 duration-500"> Админ панель
                            </button>
                        </div>
                    }
                    <div className="w-28">
                        <button className="text-lg hover:text-blue-700 duration-500"
                                onClick={() => user.logout()}>Выйти
                        </button>
                    </div>
                </div>
            }
        </header>
    );
};

export default observer(Header);