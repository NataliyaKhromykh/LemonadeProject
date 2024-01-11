import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../App.css';


  
function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,    
        arrows: false,
        autoplaySpeed: 7000,
        fade: true,
        pauseOnHover: true,
        className: "center",
        centerMode: true,
        width: 700,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                width: 300,
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                width: 200
              }
            }
          ]
    }
    
    return (
        <div className='MenuContainer'>
        <Slider {...settings}>
        <div className='card'>
          <img className='imageSize' src='promoNewMenu.png' alt='card'/>
          </div>
          <div className='card'>
          <video className='videoSize' src='promoCoffee.mp4' autoPlay="autoplay" loop="loop" muted defaultMuted playsinline/>
          </div>
          <div className='card'>
          <img  className='imageSize' src='promoBirthday.png' alt='card'/>
          </div>
          <div className='card'>
          <video className='videoSize' src='promoCookingClass.mp4' autoPlay="autoplay" loop="loop" muted defaultMuted playsinline/>
          </div>

        </Slider>
        </div>
        )
}
export default Carousel;
