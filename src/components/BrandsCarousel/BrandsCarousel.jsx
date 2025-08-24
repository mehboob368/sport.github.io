import React from "react";
import Slider from "react-slick";
import "./BrandsCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BrandsCarousel({items}){
  const settings = {
    slidesToShow: 6, slidesToScroll:1, arrows:true, dots:false, responsive:[
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 520, settings: { slidesToShow: 2 } },
    ]
  }
  return (
    <section className="product_slider image-slider">
      <div className="container-xxl">
        <div className="section-head"><h2>Our Brands</h2></div>
        <div className="border-line"></div>
        <Slider {...settings}>
          {items.map((src, i)=>(
            <div key={i} className="brand">
              <img src={src} alt={"brand-"+i} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
export default BrandsCarousel;
