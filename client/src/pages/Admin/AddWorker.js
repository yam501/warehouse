import React, {useContext, useState} from 'react';
import {Button, Container, Dropdown, Form} from "react-bootstrap";
import {roles} from "../../utils/consts";
import {Context} from "../../index";

const AddWorker = () => {
    const {user} = useContext(Context)

    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState()
    const [validFlag, setValidFlag] = useState(true)
    const [confFlag, setConfFlag] = useState(true)

    const confirm = () => {
        if (!number || !password || !role) {
            setValidFlag(false)
            setConfFlag(true)
            return
        }
        user.registration(number, password, role)
        setValidFlag(true)
        setConfFlag(false)
        setNumber('')
        setPassword('')
        setRole()
    }


    return (
        <Container className="d-flex flex-column justify-content-center align-items-center mt-lg-5">
            <h2 className="text-5xl select-none mb-6">Регистрация</h2>
            <Form className="d-flex flex-column w-80">
                <div className="d-flex flex-row">
                    <div className="d-flex flex-col me-2">
                        <Form.Control
                            className="mb-5 px-3 py-2 text-sm shadow-sm placeholder-slate-400 w-44
                                  focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-500"
                            placeholder="введите номер..."
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                        />
                        <Form.Control
                            className="mb-5 px-3 py-2 text-sm shadow-sm placeholder-slate-400 w-44
                                  focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-500"
                            placeholder="введите пароль..."
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <Dropdown onSelect={e => setRole(e)}>
                        <Dropdown.Toggle className="border-blue-500 hover:bg-blue-400 hover:border-blue-500 active:bg-blue-500" as={Button}
                                         variant='outline-primary'>{roles[role] || 'Выберите роль'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                Object.entries(roles).map(([key, value]) => {

                                    return <Dropdown.Item className="assortment-switch-item"
                                                          eventKey={key}> {value} </Dropdown.Item>
                                })
                            }


                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="d-flex flex-column justify-content-center align-content-center align-items-center">
                    <div hidden={validFlag}> Заполните все поля</div>
                    <div hidden={confFlag}> Работник добавлен</div>
                    <Button onClick={confirm} className="mt-2 bg-orange-400 border-0 hover:bg-orange-500 duration-500 hover:border-0 w-full">Регистрация</Button>
                </div>


            </Form>
        </Container>
    );
};

export default AddWorker;