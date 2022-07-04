import classes from "./Header.module.scss";
import React from "react"
import {useEffect, useState} from "react"
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";

import {
    Link
} from "react-router-dom";

import Login from "../Login/Login";
import Register from "../Register/Register";
import About from "../About/About";

const Header = () => {


    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    //effect for listening size changes
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        //runs on unmount
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    //menu open/close
    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };


    return (

        <header className={classes.header}>

            <div className={classes.header__content}>

                <div className={classes.header__logo}>
                    <h2>Reqres</h2>
                </div>

                <nav className={classes.header__nav}>
                    <ul>
                        <li>
                            <Link className={classes.header__link} to="/">About</Link>
                        </li>

                        <li>
                            <Link className={classes.header__link} to="/about">Users</Link>
                        </li>

                        <li>
                            <Link className={classes.header__link} to="/login">Login</Link>
                        </li>

                        <li>
                            <Link className={classes.header__link} to="/register">Register</Link>
                        </li>
                    </ul>

                </nav>

                <div className={classes.header__content__toogle}>
                    <BiMenuAltRight/>
                </div>

            </div>


        </header>)
}
export default Header