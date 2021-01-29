import React from 'react'
import './App.css'



function Menu(props){
    return(
        
        <ul className = "menu">
            
            <li className = " consultoria">{props.consultoria}</li>
            <li className = "ola">{props.ola}</li>
            
            
            
        </ul>
    )
}

export default Menu;