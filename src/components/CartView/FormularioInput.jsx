import React from "react";

export function FormularioInput(props){
    console.log(props)
    return (
        <>
        <label  style={{ width: "100px", marginRight: 4 }}> {props.title} </label>
        <input  
                required={true}
                name={props.name}
                value={props.value} 
                onChange={props.onInputChange} 
                type="text"
            />
        </>
    )
}

 export default FormularioInput;