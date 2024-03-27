import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

export const Header=()=>{
    return(
        <head>
            <div className="header">
            <div className="header-title">Your App Name</div>
                <ul className="menu">
                    <li className="menu-item"><Link to="/" className="menu-link">Home</Link></li>
                    <li className="menu-item"><Link to="/con" className="menu-link">Contacts</Link></li>
                </ul>
            </div>
        </head>
    )
}
