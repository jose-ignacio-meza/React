import React, {useState} from "react";
import FormularioInput from "./FormularioInput";


export function OrdenDeCompra(){
    const [datosUsuario, setDatosUsuario]= useState ({
        nombre:"",
        telefono:"",
        email:""
    });

    function onInputChange(evt){
        const nombreInput = evt.target.name;
        const valorInput = evt.target.value;
        const nuevaDataUsuario = {...datosUsuario};
        nuevaDataUsuario[nombreInput] = valorInput;
        setDatosUsuario(nuevaDataUsuario);
    }

    function onSubmit(evt,props) {
        evt.preventDefault();
        console.log(props)
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