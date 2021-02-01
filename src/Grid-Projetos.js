import React from 'react'
import './App.css'
import Netflix from './imagens/netflixnovo.png'
import red from './imagens/rednovo.png'

function Projetos(){
    return(
        <div className = "grid-projetos">
            <div className = "p1">
                <img className = 'netflix2' src={Netflix} alt=""/>
                
                    <p>Sistemas de chassis plug and play de próximo nível para montagens personalizadas de sabres de luz "faça você mesmo".</p>
                    <span><a href="#"> Em desenvolvimento</a></span>
                
            </div>

            <div className = "p2">
                <img className = 'red2' src={red} alt=""/>
                
                    <p>Sistemas de chassis plug and play de próximo nível para montagens personalizadas de sabres de luz "faça você mesmo".</p>
                    <span><a href="#"> Em desenvolvimento</a></span>
                
            </div>

            <div className = "p3">
            <img className = 'netflix2' src={Netflix} alt=""/>
                
                    <p>Sistemas de chassis plug and play de próximo nível para montagens personalizadas de sabres de luz "faça você mesmo".</p>
                    <span><a href="#"> Em desenvolvimento</a></span>
                
            </div>

            <div className = "p4">
            <img className = 'red2' src={red} alt=""/>
                 
                    <p>Sistemas de chassis plug and play de próximo nível para montagens personalizadas de sabres de luz "faça você mesmo".</p>
                    <span><a href="#"> Em desenvolvimento</a></span>
                

            </div>

            <div className = "p5">
            <img className = 'netflix2' src={Netflix} alt=""/>
                
                    <p>Sistemas de chassis plug and play de próximo nível para montagens personalizadas de sabres de luz "faça você mesmo".</p>
                    <span><a href="#"> Em desenvolvimento</a></span>
                
            </div>
            <div className = "p6">
            <img className = 'red2' src={red} alt=""/>
                
                    <p>Sistemas de chassis plug and play de próximo nível para montagens personalizadas de sabres de luz "faça você mesmo".</p>
                    <span><a href="#"> Em desenvolvimento</a></span>
                
            </div>


        </div>
    )
}

export default Projetos;