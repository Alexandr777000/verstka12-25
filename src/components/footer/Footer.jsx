import React from "react";
import s from "./Footer.module.scss";
import logoImg from "../../assets/images/logo.png";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.footerTop}>
                    <div className={s.footerTop__item}>
                        <a className={s.logo} href="#">
                            <img className={s.logo__img} src={logoImg} alt="logo"/>
                        </a>
                        <a className={s.footerTop__address} href="#">No. 342 - London
                            Oxford Street, 012 United States
                        </a>
                        <a className={s.footerTop__email}
                           href="mailto:Youremail@gmail.com">Youremail@gmail.com
                        </a>
                        <a className={s.footerTop__phone} href="tel:+02838388393">+0283
                            838 8393
                        </a>
                        <ul className={s.footerTop__social_list}>
                            <li className={s.footerTop__social_item}>
                                <a className={s.footerTop__social_link} href="#"></a>
                            </li>
                            <li className={s.footerTop__social_item}>
                                <a className={s.footerTop__social_link} href="#"></a>
                            </li>
                            <li className={s.footerTop__social_item}>
                                <a className={s.footerTop__social_link} href="#"></a>
                            </li>
                            <li className={s.footerTop__social_item}>
                                <a className={s.footerTop__social_link} href="#"></a>
                            </li>
                            <li className={s.footerTop__social_item}>
                                <a className={s.footerTop__social_link} href="#"></a>
                            </li>
                        </ul>
                    </div>
                    <div className={s.footerTop__item}></div>
                    <div className={s.footerTop__item}></div>
                    <div className={s.footerTop__item}></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;