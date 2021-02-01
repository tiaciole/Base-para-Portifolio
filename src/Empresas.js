import React from 'react'
import './App.css'
import netflix from './imagens/netflixnovo.png'
import red from './imagens/rednovo.png'


function Empresas(){
    return(

      
        <div className = "grid-empresa">
            <div>
                <img className = 'netflix' src={netflix}alt=""/>
            </div>

            <div>
                <img className = 'red' src={red}alt=""/>
            </div>

            <div>
                <img className = 'netflix' src={netflix}alt=""/>
            </div>

            <div>
                <img className = 'red' src={red}alt=""/>
            </div>

            <div>
                <img className = 'netflix' src={netflix}alt=""/>
            </div>

            <div>
                <img className = 'red' src={red}alt=""/>
            </div>

            <div>
                <img className = 'netflix' src={netflix}alt=""/>
            </div>

            <div>
                <img className = 'red' src={red}alt=""/>
            </div>

        </div>

    )
}

export default Empresas;