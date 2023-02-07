import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {App, DetailPage} from "./App";
import {Provider} from "react-redux";
import store from "./store";
import {Card} from "react-bootstrap";

const styles = {
    container: {
        padding: 20,
        marginLeft: 20
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <h1 style={styles.container}>LOGO</h1>
                    <Routes>
                        <Route path="/" element={<App/>}/>
                        <Route path="/detail" element={<DetailPage/>}/>
                    </Routes>
                </div>

            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
