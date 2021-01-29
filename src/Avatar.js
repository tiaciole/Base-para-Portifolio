import React from 'react'
import './App.css'
import avatar from './tiago.png'
import workstation from './workstation.png'


function Avatar(){
    return(
        <div>
            <div className = "avatar">
                <img className = "avatar-img" src={avatar} alt=""/>
            </div>

            <div className = "div-work">
                <img className = "workstation" src={workstation}alt=""/>
            </div>
        </div>
    )
}

export default Avatar;