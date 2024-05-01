import React, {useContext, useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import HistoryItem from "./HistoryItem";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

const History = () => {
    const [historyArr,setHistoryArr] = useState([])

    const {history} = useContext(Context)

    useEffect(() => {
        setHistoryArr(history.hs ? history.hs : [])
    }, [history.hs]);


    return (
        <Table className="mt-3" striped bordered hover>
            <thead>
            <tr className='p-1 m-1'>
                <th>Дата изменения</th>
                <th>категория</th>
                <th>название товара</th>
                <th>количество товара</th>
            </tr>
            </thead>

            <tbody>
            {historyArr.length > 0 && historyArr.map(item =>
                <HistoryItem key={item.id} product={item}/>)}
            </tbody>


        </Table>
    );
};

export default observer(History);