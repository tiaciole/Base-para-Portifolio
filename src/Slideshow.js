import React from 'react';
import './App.css';
import { Slide } from 'react-slideshow-image';
import vegeta from './imagens/rostovegeta.png'

const slideImages = [
    '/src/imagens/',
    './imagens/rostovegeta.png'
];

const Slideshow = () =>{
    return(
        <div>
            <Slide easing = 'ease'>
            <div className="slide">
            <div style={{'backgroundImage': `url(${vegeta})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          
          <div className="slide">
            <div className = 'imgslide' style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
            </Slide>
        </div>
    )
};
export default Slideshow;