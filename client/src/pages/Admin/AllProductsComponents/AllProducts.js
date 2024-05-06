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
        product.getAll().then(() => setProductsArr(product.products ? product.products : []))
    }, []);


    const handleCategory = (value) => {
        setCategory(value)
    }
    const handleName = (value) => {
        setName(value)
    }

    const search = useMemo(() => {
        return productsArr.filter((obj) => {
            const nameLower = obj.name ? obj.name.toLowerCase() : '';
            const categoryLower = obj.category ? obj.category.toLowerCase() : '';

            const nameMatches = nameLower.includes(name.toLowerCase());
            const categoryMatches = categoryLower.includes(category.toLowerCase());

            return nameMatches && categoryMatches;
        });
    }, [productsArr, name, category]);

    return (
        <Container className="mt-5">
            <Stack className="mb-5" direction="horizontal" gap={3}>
                <Form.Control
                    value={category}
                    className="w-2/5 h-11 me-auto textarea"
                    placeholder="Категория..."
                    onChange={event => handleCategory(event.target.value)}
                />
                <Form.Control
                    value={name}
                    className="w-2/5 h-11 me-auto textarea"
                    placeholder="Название..."
                    onChange={event => handleName(event.target.value)}
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