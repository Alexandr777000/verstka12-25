import React from "react";
import s from "./header.module.scss";
import globalStyles from "../../scss/_global.module.scss";
// import "src/scss/_global.module.scss";
import logoImg from "../../assets/images/logo.png";
import userIcon from "../../assets/icon/user.png";
import {ReactComponent as Cart} from "../../assets/icon/cart.svg";
import {ReactComponent as UserIcon} from "../../assets/icon/user.svg";
import {ReactComponent as SearchIcon} from "../../assets/icon/search.svg";
import {ReactComponent as HeartIcon} from "../../assets/icon/heart.svg";
import {ReactComponent as CartIcon} from "../../assets/icon/cart.svg";

export const Header = () => {
    return (
        <header className={s.header}>
            {/*<Cart/>*/}
            <div className={globalStyles.container} // className="container"
            >
                <div className={s.header__inner}>
                    <a className={s.logo} href="#">
                        <img className={s.logo__img} src={logoImg} alt="logo"/>
                    </a>
                    <nav className={s.menu}>
                        <ul className={s.menu__list}>
                            <li className={s.menu__list_item}>
                                <a className={`${s.menu__list_link} ${s.menu__list_link_active}`}
                                   href="#">HOME</a>
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
                        <a className={s.userNavigate__link} href="#">
                            <UserIcon/>
                            {/*<img className={s.userNavigate__link_img} src={userIcon} alt="user-btn-icon" />*/}
                        </a>
                        <a className={s.userNavigate_link} href="#">
                            <SearchIcon/>
                        </a>
                        <a className={s.userNavigate__link} href="#">
                            <HeartIcon/>
                            <span className={s.userNavigate__num}>3</span>
                        </a>
                        <a className={s.userNavigate__link} href="#">
                            <Cart/>
                            <span className={s.userNavigate__num}>7</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

