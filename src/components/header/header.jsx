import React from "react";
import s from "./header.module.scss";
import globalStyles from "../../scss/_global.module.scss";
// import "src/scss/_global.module.scss";
import logoImg from "../../assets/images/logo.png";
import {ReactComponent as Cart} from "../../assets/icon/cart.svg";

export const Header = () => {
    return (
        <header className={s.header}>

            <div className={globalStyles.container} // className="container"
            >
                <div className={s.header__inner}>
                    <a className={s.logo} href="#">
                        <img className={s.logo__img} src={logoImg} alt="logo"/>
                    </a>
                    <nav className={s.menu}>
                        <ul className={s.menu__list}>
                            <li className={s.menu__list_item}>
                                <a className={s.menu__list_link} href="#">HOME</a>
                            </li>
                            <li className={s.menu__list_item}>
                                <a className={s.menu__list_link} href="#">SHOP</a>
                            </li>
                            <li className={s.menu__list_item}>
                                <a className={s.menu__list_link} href="#">PAGE</a>
                            </li>
                            <li className={s.menu__list_item}>
                                <a className={s.menu__list_link} href="#">BLOG</a>
                            </li>
                            <li className={s.menu__list_item}>
                                <a className={s.menu__list_link} href="#">CONTACT</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={s.userNavigate}>
                        <a className={s.userNavigate_link} href="#"></a>
                        <a className={s.userNavigate_link} href="#">
                            {/*бейджи подтягиваются с сервера поэтому цифры хардкодим тут*/}
                            <div className="userNavigate_num">3</div>
                            <div className="userNavigate_num">7</div>
                        </a>
                        <a className={s.userNavigate_link} href="#"></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

