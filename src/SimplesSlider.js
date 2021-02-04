import React from 'react'
import './App.css'
import Vegeta from './imagens/rostovegeta.png'
import Goku from './imagens/rostogoku.png'



import Slider from 'infinite-react-carousel';
const settings =  {
  arrows: false
};
const SimplesSlider =  () => (
  
  <div className = "containerslide">
    <Slider dots>
      <div className = 'slidediv1'>
        <img className = "img1" src={Vegeta}alt=""/>
       <div className = "textoimagem1">
          <p>“Matt was a real pleasure to work with and
             we look forward to working with him again. 
             He’s definitely the kind of designer 
             you can trust with a project from start 
             to finish.”</p>
        </div>
      </div>
      <div className = 'slidediv2'>
        <img className = "img2" src={Goku}alt=""/>
        <div className = "textoimagem1">
          <p>“Matt was a real pleasure to work with and
             we look forward to working with him again. 
             He’s definitely the kind of designer 
             you can trust with a project from start 
             to finish.”</p>
        </div>
      
      </div>
      
    </Slider>
  </div>
);
export default SimplesSlider;