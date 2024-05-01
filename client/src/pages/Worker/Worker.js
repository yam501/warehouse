import React, {useContext, useEffect} from 'react';
import {Container, Tab, Tabs} from "react-bootstrap";
import AllProducts from "../Admin/AllProductsComponents/AllProducts";
import AddProducts from "./WorkerkComponents/AddProducts";
import SendProducts from "./WorkerkComponents/SendProducts";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Worker = () => {
    const {product, history} = useContext(Context)

    useEffect(() => {
        product.getAll()
        history.getAll()
    }, []);

    return (
        <Container className="mt-5">
            <Tabs>
                <Tab
                    eventKey="allProducts"
                    title={"Весь товар"}>
                    <AllProducts/>
                </Tab>
                <Tab
                    eventKey="addProducts"
                    title={"Приём товара"}>
                    <AddProducts/>
                </Tab>
                <Tab
                    eventKey="sendProducts"
                    title={"Отправка товара"}>
                    <SendProducts/>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default observer(Worker);