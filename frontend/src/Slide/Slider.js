import React, {useState} from 'react';
import './Slider.css';


const Slider = () => {
    const SliderStyle = {
        height: "250px",
        witdh: "100%",
        witdh: "50px",
        
    };
    return(
        <div class="img-slider">
            <div class="img-item">
            <img style={SliderStyle} src="/images/1.png" alt="slider1"></img>
            </div>
            <div class="img-item">
            <img style={SliderStyle} src="/images/1.png" alt="slider1"></img>
            </div>
            <div class="img-item">
            <img style={SliderStyle} src="/images/1.png" alt="slider1"></img>
            </div>
            <div class="img-item">
            <img style={SliderStyle} src="/images/1.png" alt="slider1"></img>
            </div>
            <div class="img-item">
            <img style={SliderStyle} src="/images/1.png" alt="slider1"></img>
            </div>
        </div>
    );
};



export default Slider;