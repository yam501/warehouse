import React from 'react';
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";


const AuthButton = () => {
    const navigate = useNavigate()
    const handleLoginClick = () => {
        navigate(LOGIN_ROUTE)
    }
    return (
        <button
            onClick={() =>handleLoginClick()}
            className="w-48 text-xl text-amber-50 pb-1 rounded bg-orange-300 h-11 hover:bg-orange-400 hover:shadow-lg shadow-xl transition duration-500">авторизация
        </button>
    );
};

export default AuthButton;