import React from 'react';
import './App.css'
import Menu from './Menu'


function Header(props){
    return(
        <div className = "header">


            <h1 className = "logo">{props.logo}</h1>

            <Menu className = "listamenu" consultoria = "Consultoria" ola = "Diga olá"/>
            

           

           
        </div>
    )
}




export default Header;