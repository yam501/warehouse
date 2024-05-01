import React, {useContext, useState} from 'react';
import {Form, Stack} from "react-bootstrap";
import {Context} from "../../../index";


const SendProductItem = ({item}) => {
    const {product} = useContext(Context)
    const [showChangesForm, setShowChangesForm] = useState("hidden")
    const [showChangesButton, setShowChangesButton] = useState("block")
    const [count, setCount] = useState(0)


    const show = () => {
        setShowChangesForm("block")
        setShowChangesButton("hidden")
    }

    const sendProducts = () => {
        if (item.count - count > 0) {
            product.sendProduct(item.name, item.category, count)
        }
        else {
            alert("Ты дурак?")
        }


        setShowChangesButton("block")
        setShowChangesForm("hidden")
    }

    return (
        <tr>
            <th>
                {item.category}
            </th>
            <th>
                {item.name}
            </th>
            <th>
                {Number(item.count) - Number(count)}
            </th>
            <th style={{width: 353, height: 120}}>
                <Stack className="h-100 d-flex justify-content-center" direction="horizontal" gap={3}>
                    <div className={`${showChangesForm} changesForm flex flex-row`}>
                        <Form.Control
                            type="number"
                            className="w-40"
                            placeholder="Количество"
                            onChange={event => setCount(event.target.value)}
                        />
                        <button onClick={sendProducts}
                                className="ms-2 bg-blue-500 w-40 active:bg-blue-500 text-amber-50 border-0 rounded-md h-10 hover:bg-blue-700 duration-500">Убрать
                        </button>
                    </div>
                    <div className={`${showChangesButton} changesButton`}>
                        <button
                            onClick={() => show()}
                            className={`bg-blue-500 w-40 active:bg-blue-500 text-amber-50 border-0 rounded-md h-10 hover:bg-blue-700 duration-500`}>выбрать
                        </button>
                    </div>
                </Stack>
            </th>
        </tr>
    );
};

export default SendProductItem;