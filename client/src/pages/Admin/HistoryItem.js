import React from 'react';
import {Col, Row} from "react-bootstrap";

const HistoryItem = ({item}) => {
    return (
        <Row className='p-2 m-1'>
            <Col className='p-2 ms-1'>
                {item.id}
            </Col>
            <Col className='ms-4 p-2'>
                {item.category}
            </Col>
            <Col className='ms-4 p-2'>
                {item.name}
            </Col>
            <Col className='ms-4 p-2'>
                {item.count}
            </Col>
        </Row>
    );
};

export default HistoryItem;