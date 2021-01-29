import React from 'react'
import './App.css'

function Apresentação(props){
    return(
        <div className = 'apresentacao'>
            <h2>{props.eu}</h2>

            <p>{props.descricao}</p>
            
        </div>
    )
}


export default Apresentação;
