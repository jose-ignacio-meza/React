import React from "react";
import "./navBar.css"
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar (){
return (
    <>
        <div className="flexing navBarMenu">    
            <Link to="/">
             <h3 className="m-4"> StreetFire </h3>
            </Link>

            <Link to="/category/trucks">
                <h2> trucks </h2> 
            </Link>
            <Link to="/category/tabla"> 
                <h2> tabla </h2> 
            </Link>
            <Link to="/category/skate"> 
                <h2> skate </h2> 
            </Link>
            <Link to="/category/lija"> 
                <h2> lija </h2> 
            </Link>
            <CartWidget className="m-4"></CartWidget>
        </div>
    </>
)
}

export default NavBar;