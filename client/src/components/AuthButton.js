import React from 'react';


const AuthButton = ({onClick}) => {

    return (
        <button
            onClick={() => onClick}
            className="w-52 text-xl text-amber-50 pb-1 rounded bg-orange-300 h-12 hover:bg-orange-400 hover:shadow-lg shadow-xl transition duration-500">авторизация
        </button>
    );
};

export default AuthButton;