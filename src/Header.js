import React from 'react';
import './App.css'
import Menu from './Menu'


function Header(props){
    return(
        <div className = "header">


            <h1>{props.logo}llll</h1>

            <Menu consultoria = "Consultoria" ola = "Diga olá"/>
            

           

           
        </div>
    )
}




export default Header;