import React, {useContext, useEffect} from 'react';
import History from "./HistoryComponents/History";
import AddWorker from "./AddWorker";
import {Container, Tab, Tabs} from "react-bootstrap";
import AllProducts from "./AllProductsComponents/AllProducts";
import {Context} from "../../index";

const Admin = () => {
    const {product, history} = useContext(Context)

    useEffect(() => {
        product.getAll()
        history.getAll()
    }, []);

    return (
        <Container className="mt-5">
            <Tabs>
                <Tab eventKey="allProducts" title={"Весь товар"}>
                    <AllProducts/>
                </Tab>
                <Tab eventKey="history" title={"История изменений"}>
                    <History/>
                </Tab>
                <Tab eventKey="addWorker" title={"Зарегистрировать сотрудника"}>
                    <AddWorker/>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default Admin;