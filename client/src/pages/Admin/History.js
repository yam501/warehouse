import React from 'react';
import {Col, Row, Table} from "react-bootstrap";
import HistoryItem from "./HistoryItem";

const History = () => {
    const array = [
        {id: 1,category: "одежда",name: "кроссовки",count: 50},
        {id: 1,category: "одежда",name: "кроссовки",count: 50},
        {id: 1,category: "одежда",name: "кроссовки",count: 50},
        {id: 1,category: "одежда",name: "кроссовки",count: 50},
    ]

    return (
        <Table>
            <Row className='p-1 m-1'>
                <Col className="">Номер накладной</Col>
                <Col className="">категория</Col>
                <Col className="">название товара</Col>
                <Col className="">количество товара</Col>
            </Row>
            <div className="max-size-window">
                {array.map(item =>
                    <HistoryItem item={item}/>)}
            </div>
        </Table>
    );
};

export default History;