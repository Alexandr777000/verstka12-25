import React from "react";
import './header.scss'
import logo from "./../../assets/images/logo.png";

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a className="logo" href="#">
                        <img className="logo__img" src={logo}
                             alt=""/>
                    </a>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <a className="menu__list-link" href="#">HOME</a>
                            </li>
                            <li className="menu__list-item">
                                <a className="menu__list-link" href="#">SHOP</a>
                            </li>
                            <li className="menu__list-item">
                                <a className="menu__list-link" href="#">PAGE</a>
                            </li>
                            <li className="menu__list-item">
                                <a className="menu__list-link" href="#">BLOG</a>
                            </li>
                            <li className="menu__list-item">
                                <a className="menu__list-link" href="#">CONTACT</a>
                            </li>
                        </ul>
                        <div className="user-nav">
                            <a className="user-nav__link" href="#"></a>
                            <a className="user-nav__link" href="#"></a>
                            <a className="user-nav__link" href="#">
                                <div className="user-nav__num"></div>
                            </a>
                            <a className="user-nav__link" href="#">
                                <div className="user-nav__num"></div>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>

        </header>

    );
};

