import React from 'react'
import "./App.css"

function Cabeçalho(props){
    return(

        <div className = "cabeçalho">
            <h1>{props.titulo}</h1>
            <h3>{props.subtitulo}</h3>
        </div>


    )
}

export default Cabeçalho;
