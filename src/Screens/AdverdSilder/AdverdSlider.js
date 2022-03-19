import React from 'react'
import { Component } from "react";
import Slider from "react-slick";
import "./adverdslider.css"
export default class AutoPlay extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
      return (
        <div className='slider'>
          
          <Slider {...settings}>
            <div className='adverd-slider'>
           <h3>Бесплатная доставка</h3>
            </div>
            <div className='adverd-slider'>
                <h3>Сочетание цены и качества</h3>
           </div>
           <div className='adverd-slider'>
                <h3>Широкий ассортимент</h3>
                </div>
                <div className='adverd-slider'>
                <h3>Скидки до -70%</h3>
               </div>
               <div className='adverd-slider'>
                <h3>Безпроблемный возврат</h3>
              </div>
          <div className='adverd-slider'>
                  <h3>Рассрочки</h3>
                </div>
         </Slider>
        </div>
      );
    }
  }