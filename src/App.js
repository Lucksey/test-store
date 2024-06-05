import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import s from "./components/Navbar/Navbar.module.css";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";
import {productsAPI} from "./api/api";


function App() {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/products/*" element={<Products/>}/>
                    <Route path="/contacts/*" element={<Contacts/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
