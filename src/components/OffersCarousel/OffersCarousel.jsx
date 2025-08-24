import React from "react";
import Slider from "react-slick";
import "./OffersCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const offers = [
  { img:"images/1.webp", title:"We have footballs for all levels of competition.", text:"Do not forget about your feet! Keep the whole body healthy with professional shoes. Running,..." },
  { img:"images/2.webp", title:"Football Helmets - Varsity Helmets - Youth Helmets", text:"To be in a good shape is very important nowadays because our way of life..." },
  { img:"images/3.webp", title:"Save 10% on best gear for football! More in-stock than...", text:"We provide a full-line product offering in a traditional sporting goods store format. Our product..." },
  { img:"images/4.webp", title:"We provide a full-line product offering in a traditional sporting...", text:"Do not forget about your feet! Keep the whole body healthy with professional shoes. Running,..." },
];

function OffersCarousel(){
  const settings = {
    slidesToShow: 3, slidesToScroll:1, arrows:true, dots:false, responsive:[
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ]
  }
  return (
    <section className="product_slider last-slider">
      <div className="container-xxl">
        <div className="section-head"><h2>Our Best Offers</h2></div>
        <div className="border-line"></div>
        <Slider {...settings}>
          {offers.map((o, i)=> (
            <div key={i} className="offer">
              <div className="image"><img src={o.img} alt={o.title} /></div>
              <div className="bottom-text">
                <h3>{o.title}</h3>
                <p>{o.text}</p>
                <div className="add-to-cart"><a href="#">Read more</a></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
export default OffersCarousel;
