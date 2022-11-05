import React from "react";
import "./navBar.css"
import CardWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar (){
return (
    <>
        <div className="flexing navBarMenu">    
            <Link to="/">
             <h3 className="m-4"> PhoneGang </h3>
            </Link>

            <Link to="/">
                <h3> Inicio </h3> 
            </Link>
            <Link to="/category/smartphones"> 
                <h3> SmarthPhones </h3> 
            </Link>
            <CardWidget className="m-4"></CardWidget>
        </div>
    </>
)
}

export default NavBar;