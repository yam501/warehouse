import React, {useContext} from 'react';
import {Context} from "../index";

const ErrorPage = () => {
    const {user} = useContext(Context)
    return (
        <div style={{height: "calc(100vh - 96px)"}} className="bg-gray-300">
            {user._isAuth ?
                <div>Такой страницы нет</div>
                :
                "Авторизируйтесь, чтобы продолжить"

            }
        </div>
    );
};

export default ErrorPage;