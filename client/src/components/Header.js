import React, {useContext} from 'react';
import {Context} from "../index";

const Header = () => {
    const {user} = useContext(Context)

    return (
        <header className="shadow-2xl h-24  px-56 text-amber-50 flex items-center justify-between bg-blue-500">
            <p className="text-2xl select-none">Оптовый склад
            </p>

            <button
                className="bg- w-52 text-xl pb-1 rounded bg-orange-300 h-12 hover:bg-orange-400 hover:shadow-lg shadow-xl transition duration-500">авторизация
            </button>

        </header>
    );
};

export default Header;