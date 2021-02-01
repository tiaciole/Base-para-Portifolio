import React from 'react'
import './App.css'

function Trabalhos(props){
    return(
        <div className = "trabalhos">
            <h2>{props.titulo}</h2>

            <p>Aqui estão alguns projetos de design em que trabalhei recentemente. Quer ver mais? <span><a href="#"> Me mande um email .</a></span></p>

        </div>
    )
}

export default Trabalhos;
