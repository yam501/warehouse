import React, {useContext} from 'react';
import {Context} from "../index";
import AuthButton from "./AuthButton";
import Button from "./Button";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, WORKER_ROUTE} from "../utils/consts";

const Header = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const handleLoginClick = () =>{
        navigate(LOGIN_ROUTE)
    }
    const handleAdminClick = () =>{
        navigate(ADMIN_ROUTE)
    }
    const handleWorkerClick = () =>{
        navigate(WORKER_ROUTE)
    }
    return (
        <header className="shadow-2xl h-24  px-56 text-amber-50 flex items-center justify-between bg-blue-500">
            <p className="text-2xl select-none">Оптовый склад
            </p>
            {user._isAuth ?
                <div className="flex justify-between w-96 mt-2">
                    {user._user.role === "ADMIN" ?
                        <>
                            <div className="w-36">
                                <Button
                                    style={"bg-orange-300 rounded hover:bg-orange-400 hover:shadow-lg shadow-xl transition duration-500"}
                                    onClick={handleAdminClick} text={"Админ панель"}></Button>
                            </div>
                            <div className="w-36">
                                <Button
                                    style={"bg-orange-300 rounded hover:bg-orange-400 hover:shadow-lg shadow-xl transition duration-500"}
                                    onClick={handleWorkerClick} text={"Панель работника"}></Button>
                            </div>
                            <div className="w-20">
                                <Button
                                    style={"bg-orange-300 rounded hover:bg-orange-400 hover:shadow-lg shadow-xl transition duration-50"}
                                    onClick={console.log(3)} text={"Выйти"}></Button>
                            </div>
                        </>
                        :
                        <>
                            <div className="w-52">
                                <Button
                                    style={"bg-orange-300 rounded hover:bg-orange-400 hover:shadow-lg shadow-xl transition duration-500 text-lg"}
                                    onClick={handleWorkerClick} text={"Панель работника"}></Button>
                            </div>
                            <div className="w-28">
                                <Button
                                    style={"bg-orange-300 rounded hover:bg-orange-400 hover:shadow-lg shadow-xl transition duration-500 text-lg"}
                                    onClick={console.log(3)} text={"Выйти"}></Button>
                            </div>
                        </>
                    }
                </div>
                :
                <AuthButton onClick={handleLoginClick}/>
            }
        </header>
    );
};

export default observer(Header);