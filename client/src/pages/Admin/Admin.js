import React from 'react';
import History from "./History";
import AddWorker from "./AddWorker";
import {Container, Tab, Tabs} from "react-bootstrap";

const Admin = () => {
    return (
        <Container>
            <Tabs
                style={{marginTop: 20}}>
                <Tab eventKey="createTour" title={"История изменений"}>
                    <History/>
                </Tab>
                <Tab eventKey="addEmployee" title={"Зарегестрировать сотрудника"}>
                    <AddWorker/>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default Admin;