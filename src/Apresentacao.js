import React from 'react'
import './App.css'

function Apresentação(props){
    return(
        <div className = 'apresentacao'>
            <div>
                <h2>{props.eu}</h2>
            </div>
            
            <div>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}


export default Apresentação;
