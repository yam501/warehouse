import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./stores/UserStore";
import "./index.css"
import ProductsStore from "./stores/ProductsStore";
import HistoryStore from "./stores/HistoryStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null)
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        product: new ProductsStore(),
        history: new HistoryStore(),

    }}>
        <App/>
    </Context.Provider>
);
