import React, {useContext} from 'react';
import {Context} from "../index";
import AuthButton from "./AuthButton";

const ErrorPage = () => {
    const {user} = useContext(Context)
    return (
        <div style={{height: "calc(100vh - 96px)"}} className="flex justify-center">
            {!user._isAuth ?
                <div className="flex items-center text-2xl text-amber-50 select-none">Такой страницы нет 🙁</div>
                :
                <div className="flex items-center text-blue-500 flex-col my-auto">
                    <div className="text-2xl mb-5 select-none">Авторизируйтесь,
                        чтобы продолжить
                    </div>
                    <AuthButton/>
                </div>


            }
        </div>
    );
};

export default ErrorPage;