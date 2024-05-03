import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Container, Form, Stack, Table} from "react-bootstrap";
import ProductItem from "./ProductItem";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

const AllProducts = () => {
    const {product} = useContext(Context)
    const [productsArr, setProductsArr] = useState([])
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        setProductsArr(product.products ? product.products : [])
    }, [product.products]);


    const search = useMemo(() => {
        return productsArr.filter((obj) => obj.name.toLowerCase().includes(name.toLowerCase()) & obj.category.includes(category.toLowerCase()))

    }, [productsArr, name, category])

    return (
        <Container className="mt-5">
            <Stack className="mb-5" direction="horizontal" gap={3}>
                <Form.Control
                    value={category}
                    className="w-2/5 h-11 me-auto textarea"
                    placeholder="Категория..."
                    onChange={event => setCategory(event.target.value)}
                />
                <Form.Control
                    value={name}
                    className="w-2/5 h-11 me-auto textarea"
                    placeholder="Название..."
                    onChange={event => setName(event.target.value)}
                />
            </Stack>
            <Container className="mt-5 table-wrapper">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>категория</th>
                        <th>название товара</th>
                        <th>количество товара</th>
                    </tr>
                    </thead>
                    <tbody>
                    {search.length > 0 && search.map(item =>
                        <ProductItem key={item.id} product={item}/>)}
                    </tbody>
                </Table>
            </Container>
        </Container>
    );
};

export default observer(AllProducts);