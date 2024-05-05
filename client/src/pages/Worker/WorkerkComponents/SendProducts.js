import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Container, Form, Table} from "react-bootstrap";
import SendProductItem from "./SendProductItem";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";


const SendProducts = () => {
    const {product} = useContext(Context)
    const [sendArr, setSendArr] = useState([])
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        setSendArr(product.products ? product.products : [])
    }, [product.products]);


    const search = useMemo(() => {
        return sendArr.filter((obj) => {
            const nameLower = obj.name ? obj.name.toLowerCase() : '';
            const categoryLower = obj.category ? obj.category.toLowerCase() : '';

            const nameMatches = nameLower.includes(name.toLowerCase());
            const categoryMatches = categoryLower.includes(category.toLowerCase());
            return nameMatches && categoryMatches;
        });
    }, [sendArr, name, category]);


    return (
        <Container className="mt-3 ">
            <Form className="pl-3" >
                <div className="d-flex flex-row">
                    <div className="me-3 w-1/2">
                        <p className="ms-1 me-2 mb-1">Категория</p>
                        <Form.Control
                            required
                            value={category}
                            placeholder="Введите название"
                            onChange={event => setCategory(event.target.value)}
                        >
                        </Form.Control>
                    </div>
                    <div className="me-3 w-1/2">
                        <p className="ms-1 me-2 mb-1">Название</p>
                        <Form.Control
                            value={name}
                            placeholder="Введите название"
                            onChange={event => setName(event.target.value)}
                        >
                        </Form.Control>
                    </div>
                </div>
            </Form>
            <Container className="mt-5 table-wrapper">
                <Table striped bordered hover>
                    <thead>
                    <tr className='p-1 m-1'>
                        <th className="">категория</th>
                        <th className="">название товара</th>
                        <th className="">количество товара</th>
                        <th>Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    {search.length > 0 && search.map(item =>
                        <SendProductItem key={item.id} item={item}/>)}
                    </tbody>
                </Table>
            </Container>
        </Container>

    );
};

export default observer(SendProducts);