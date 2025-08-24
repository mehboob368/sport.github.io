import React from "react";
import Slider from "react-slick";
import "./HeroSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
<<<<<<< HEAD
  { bg: "https://raw.githubusercontent.com/mehboob368/sport.github.io/refs/heads/main/docs/images/slider1_1810x600_crop_top.webp", kicker:"Up to 30% OFF on all items!", h1:["FOOTBALL","EQUIPMENT & GEAR"] },
=======
  { bg: "images/slider1_1810x600_crop_top.webp", kicker:"Up to 30% OFF on all items!", h1:["FOOTBALL","EQUIPMENT & GEAR"] },
>>>>>>> 59b8318 (Fix image paths for GitHub Pages)
  { bg: "images/slider2_1810x600_crop_top.webp", kicker:"The latest trends in our shop!", h1:["This week’s New","Arrival"] },
  { bg: "images/slider3_1810x600_crop_top.webp", kicker:"Up to 50% less!", h1:["Activewear and","Sportswear"] },
];

function HeroSlider(){
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: true,
    dots: true
  };
  return (
    <section className="slider_wrapper">
      <div className="container-xxl">
        <Slider {...settings}>
          {slides.map((s, idx)=> (
            <div key={idx}>
              <div className="slide" style={{ backgroundImage:`url(${s.bg})` }}>
                <div className="inner">
                  <p className="kicker">{s.kicker}</p>
                  <h2>{s.h1.map((l,i)=>(<p key={i}>{l}</p>))}</h2>
                  <a href="#" className="btn-outline-dark">Shop Now</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
export default HeroSlider;
