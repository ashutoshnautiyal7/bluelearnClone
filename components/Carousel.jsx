'use client'

import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";

class Carousel extends Component{
  render(){
    const settingsformd = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 10,
      cssEase: "linear"
    };

    const settingsforsm = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 10,
      cssEase: "linear"
    };
    return(
      <div className="md:container md:mx-auto md:px-20 my-20">
        <h2 className="text-center font-bold text-xl md:text-2xl pb-12">Here’s what recruiters are saying</h2>
        <Slider {...settingsformd}>
            
          <div className="container ">
            <img  className="md:h-3/4 md:w-3/4 " src="/hire4.png" />
          </div>
          <div className="container ">
            <img className="md:h-3/4 md:w-3/4 "  src="hire5.png" />
          </div>
          <div className="container ">
            <img className="md:h-3/4 md:w-3/4 "  src="hire6.png" />
          </div>
          <div className="container ">
            <img  className="md:h-3/4 md:w-3/4 " src="/hire4.png" />
          </div>
          <div className="container ">
            <img className="md:h-3/4 md:w-3/4 "  src="hire5.png" />
          </div>
          <div className="container ">
            <img className="h-3/4 w-3/4 "  src="hire6.png" />
          </div>
          {/* <div className="container">
            <img src="http://recruiters-zone.com/static/media/ibexglobal.bbde01ca0d4903ed36b1.png" />
          </div>
          <div className="container">
            <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
          </div> */}
        </Slider>
      </div>
    );
  }
};

export default Carousel;
