import React from 'react';

const AddWorker = () => {
    return (
        <div className="flex justify-center items-center mt-12">
            <div className="w-96 flex flex-col items-center justify-between h-96">
                <h1 className="text-5xl mb-8 select-none">Регистрация</h1>
                <form className="flex-col flex w-full">
                    <span className="select-none">Номер</span>
                    <input
                        className="mb-2 block h-12 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                  invalid:border-pink-500 invalid:text-pink-600
                                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        placeholder="введите номер..."
                    />
                    <span className="select-none">Пароль</span>
                    <input
                        className="block h-12 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                  invalid:border-pink-500 invalid:text-pink-600
                                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        placeholder="введите пароль..."
                    />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                        Неправильный логин или пароль
                    </p>
                </form>
                <button className="bg-blue-400 text-amber-50 w-full h-12 pb-1 rounded text-lg hover:bg-blue-500 duration-500">
                    войти
                </button>
            </div>
        </div>
    );
};

export default AddWorker;