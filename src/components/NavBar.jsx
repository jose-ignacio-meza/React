import React from "react";
import "./navBar.css"
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar (){
return (
    <>
        <div className="flexing navBarMenu">    
            <Link to="/">
             <h3 className="m-4"> PhoneGang </h3>
            </Link>

            <Link to="/category/laptops">
                <h3> laptops </h3> 
            </Link>
            <Link to="/category/smartphones"> 
                <h3> SmarthPhones </h3> 
            </Link>
            <CartWidget className="m-4"></CartWidget>
        </div>
    </>
)
}

export default NavBar;