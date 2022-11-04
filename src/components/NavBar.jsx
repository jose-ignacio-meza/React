import React from "react";
import Button from "./Button/Button"
import "./navBar.css"
import CardWidget from "./CartWidget/CartWidget";

function NavBar (){
return (
    <>
        <div className="flexing">
            <div className="navBarSize">
            <h3 className="m-4"> PhoneGang </h3>
            <button className="btn"> Inicio </button>
            <button className="btn"> Productos </button>
            </div>
            <CardWidget className="m-4"></CardWidget>
        </div>
    </>
)
}

export default NavBar;