import React from "react";
import Button from "./Button/Button"
import CardWidget from "./CartWidget/CartWidget";

function NavBar (){
return (
    <>
    <CardWidget></CardWidget>
    <div>
    <h3 className="m-4"> PhoneGang </h3>
    <button className="btn"> Inicio </button>
    <button className="btn"> Productos </button>
    </div>
    </>
)
}

export default NavBar;