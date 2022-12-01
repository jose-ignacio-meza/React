import React, {useState} from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import FormularioInput from "./FormularioInput";


export function OrdenDeCompra(){
    const [datosUsuario, setDatosUsuartio]= useState ({
        nombre:"",
        telefono:"",
        email:""
    });

    console.log(datosUsuario);

    function onInputChange(evt){
        const nombreInput = evt.target.name;
        const valorInput = evt.target.value;
        console.log(nombreInput)
        const nuevaDataUsuario = {...datosUsuario};
        nuevaDataUsuario[nombreInput] = valorInput;
        setDatosUsuartio(nuevaDataUsuario);
    }

    function onSubmit(props,evt) {
        evt.preventDefault();
        props.onSubmit(datosUsuario);
    }


    return (
        <form onSubmit={onSubmit}>
            <FormularioInput required={true} name="nombre"   value={datosUsuario.nombre}     title="Nombre" onInputChange={onInputChange}/>     
            <FormularioInput required={true} name="telefono" value={datosUsuario.telefono}   title="Celular" onInputChange={onInputChange}/>
            <FormularioInput required={true} name="email"    value={datosUsuario.email}     title="Email" onInputChange={onInputChange}/>
            <button onClick={onSubmit}>Realizar orden</button>
        </form>
    )
}

export default OrdenDeCompra;