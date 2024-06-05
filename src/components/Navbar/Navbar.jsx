import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.wrapper}>
            <div className={s.item}><NavLink to="/products">Товары</NavLink></div>
            <div className={s.item}><NavLink to="/contacts">Контакты</NavLink></div>
            <div className={s.item}><NavLink to="/carts">Carts</NavLink></div>


        </div>
    </nav>
}

export default Navbar;

