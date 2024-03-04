import React from 'react'
import logo from "../../img/footer/Logo_-_Good4Me_140x 1.jpg" 
import {Shop} from '../../pages/Shop'
import { Link } from 'react-scroll';
import { useState } from 'react';
function Header() {

    // const [click, setClick] = useState(false)
    // const handleClick = () => setClick(!click)

    // const closeMenu = () => setClick(false)
   return (
     <div>
       <div className="header__top">
     <div className="login">
        <div className="login__text">
            <p>Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*</p>
        </div>
        <div className="login__reg">
            <p>Sign In / Register</p>
        </div>
    </div>
    
        <nav className="nav">
            <div className="nav__logo">
                <h2 className="logo"><img src={logo}/></h2>
            </div>
            <ul className="nav__list">
                <li><Link to ="header" spy = {true} smooth={true} offfset = {-100} duration = {1000} >home</Link></li>
                <li><Link to ="products" spy = {true} smooth={true} offfset = {-100} duration = {1000} >SHOP</Link></li>
                <li><Link to ="service" spy = {true} smooth={true} offfset = {-100} duration = {1000} >FAQ'S</Link></li>
                <li><Link to ="control" spy = {true} smooth={true} offfset = {-100} duration = {1000} >STOCKISTS</Link></li>
                <li><Link to ="latest-news" spy = {true} smooth={true} offfset = {-100} duration = {1000} >WHOLESALE</Link></li>
                <li><Link to ="footer" spy = {true} smooth={true} offfset = {-100} duration = {1000} >CONTACT</Link></li>
            </ul>
            <div className="nav__search">
                <h2>hello</h2>
            </div>
        </nav>

    </div>;
     </div>
   )
 }
 
 export default Header


