import React, {useContext, useEffect, useState} from 'react';
import {ADMIN_ROUTE, WORKER_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {Form} from "react-bootstrap";

const Auth = () => {
    const {user} = useContext(Context)
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [validated, setValidated] = useState(false)


    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            user.login(number, password)
            setDefaultValue()
            return 0
        }


        setValidated(true);
    };

    const setDefaultValue = () => {
        setNumber('')
        setPassword('')

        setValidated(false)
    }
    useEffect(() => {
        if (user._user.role === "ADMIN") {
            navigate(ADMIN_ROUTE)
        }
        if (user._user.role === "EMPLOYEE") {
            navigate(WORKER_ROUTE)
        }
    }, [user._user.role]);


    return (
        <div style={{height: "calc(100vh - 96px)"}} className="px-56 flex justify-center items-center">
            <div className="w-96 flex flex-col items-center justify-between h-96">
                <h1 className="text-5xl select-none mb-6">Авторизация</h1>
                <Form
                    validated={validated} onSubmit={handleSubmit}
                    className="flex-col flex w-full">
                    <span className="select-none text-sm font-medium leading-6 text-gray-900 ">Номер</span>
                    <Form.Control
                        required
                        className="mb-5 px-3 py-2 text-sm shadow-sm placeholder-slate-400
                                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        placeholder="введите номер..."
                        onChange={event => setNumber(event.target.value)}
                    />
                    <span className="select-none text-sm font-medium leading-6 text-gray-900">Пароль</span>
                    <Form.Control
                        required
                        className="mb-5 px-3 py-2 text-sm shadow-sm placeholder-slate-400
                                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        type="password"
                        placeholder="введите пароль..."
                        onChange={event => setPassword(event.target.value)}
                    />
                    <button
                        className="bg-blue-400 text-amber-50 w-full h-12 pb-1 rounded text-lg hover:bg-blue-700 duration-500">
                        войти
                    </button>
                </Form>

            </div>
        </div>
    );
};

export default Auth;