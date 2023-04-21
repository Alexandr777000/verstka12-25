import React from "react";
import s from "./Footer.module.scss";
import logoImg from "../../assets/images/logo.png";
import mastercardImg from "../../assets/icons/mastercard.png";
import visaImg from "../../assets/icons/visa.png";
import paypalImg from "../../assets/icons/paypalpng.png";
import {ReactComponent as FacebookIcon} from "../../assets/icons/facebook-f.svg";
import {ReactComponent as TwitterIcon} from "../../assets/icons/twitter.svg";
import {ReactComponent as LinkedinIcon} from "../../assets/icons/linkedin-in.svg";
import {ReactComponent as GooglePlusIcon} from "../../assets/icons/google.svg";
import {ReactComponent as PinterestIcon} from "../../assets/icons/pinterest-p.svg";


const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.footerTop}>
                    <div className={`${s.footerTop__item} ${s.footerTop__contact}`}>
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
                                <a className={s.footerTop__social_link} href="#">
                                    <FacebookIcon/>
                                </a>
                            </li>
                            <li className={s.footerTop__social_item}>
                                <a className={s.footerTop__social_link} href="#">
                                    <TwitterIcon/>
                                </a>
                            </li>
                            <li className={s.footerTop__social_item}>
                                <a className={s.footerTop__social_link} href="#">
                                    <LinkedinIcon/>
                                </a>
                            </li>
                            <li className={s.footerTop__social_item}>
                                <a className={s.footerTop__social_link} href="#">
                                    <GooglePlusIcon/>
                                </a>
                            </li>
                            <li className={s.footerTop__social_item}>
                                <a className={s.footerTop__social_link} href="#">
                                    <PinterestIcon/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={`${s.footerTop__item} ${s.footerTop__nav}`}>
                        <h6 className={s.footerTop__title}>
                            Useful Links
                        </h6>
                        <ul className={s.footerTop__list}>
                            <li className={s.footerTop__item}>
                                <a className={s.footerTop__link} href="#">About Us</a>
                            </li>
                            <li className={s.footerTop__item}>
                                <a className={s.footerTop__link} href="#">Privacy
                                    Policy</a>
                            </li>
                            <li className={s.footerTop__item}>
                                <a className={s.footerTop__link} href="#">Terms &
                                    Conditions</a>
                            </li>
                            <li className={s.footerTop__item}>
                                <a className={s.footerTop__link} href="#">Contact Us</a>
                            </li>
                            <li className={s.footerTop__item}>
                                <a className={s.footerTop__link} href="#">Help &
                                    Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`${s.footerTop__item} ${s.footerTop__nav}`}>
                        <h6 className={s.footerTop__title}>
                            My Account
                        </h6>
                        <ul className={s.footerTop__list}>
                            <li className={s.footerTop__item}>
                                <a className={s.footerTop__link} href="#">My Account</a>
                            </li>
                            <li className={s.footerTop__item}>
                                <a className={s.footerTop__link} href="#">My Cart</a>
                            </li>
                            <li className={s.footerTop__item}>
                                <a className={s.footerTop__link} href="#">My WIshlist</a>
                            </li>
                            <li className={s.footerTop__item}>
                                <a className={s.footerTop__link} href="#">Registration</a>
                            </li>
                            <li className={s.footerTop__item}>
                                <a className={s.footerTop__link} href="#">Check Out</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`${s.footerTop__item} ${s.footerTop__item_form}`}>
                        <h6 className={s.footerTop__title}>Subscribe Our Newsletter</h6>
                    </div>
                    <p className={s.footerTop__text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor inacididunt ut labore et dolore magna aliqua. Quis
                        ipsum suspendisse ultrices gravida.
                    </p>
                    <form className={s.footerTop__form}>
                        <input className={s.footerTop__form_input} type="email"
                               placeholder={"Your email address"} required/>
                        <button className="footerTop__form_btn"
                                type={"submit"}>Subscribe
                        </button>
                    </form>
                </div>
                <div className={s.footer__bottom}>
                    <p className={s.footer__copy}>© 2019 CodeAstrology. All Rights
                        Reserved.</p>
                    <div className={s.footer__bottom_accept}>
                        We Accept
                        <img src={mastercardImg} alt="we accept"
                             className={s.footer__bottom_accept}/>
                        <img src={visaImg} alt="we accept"
                             className={s.footer__bottom_accept}/>
                        <img src={paypalImg} alt="we accept"
                             className={s.footer__bottom_accept}/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

/*
проверить длинные записи
{`${s.footerTop__item} ${s.footerTop__nav}

меньше названия класов сделать как в портфолио проекте...
 */