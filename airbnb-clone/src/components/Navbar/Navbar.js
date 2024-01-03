import React from "react";
import logo from '../../images/airbnb-logo.png';
import './NavbarStyle.css'

export default function Navbar() {
    return(
        <nav>
            <img src={logo} className="nav--logo"/>
        </nav>
    )
}