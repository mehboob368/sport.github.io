import React from "react";
import Slider from "react-slick";
import "./ProductCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card({item}){
  return (
    <div className="product_card">
      <div className="image">
        <img src={item.img} alt={item.title} className="main_img" />
        {item.discount && <span className="badge black">{item.discount}</span>}
        {item.isNew && <span className="badge orange orange1">New</span>}
        <div className="hover">
          <p>{item.title}</p>
          <span className="span">{item.price}</span>
          <div className="add-to-cart">
            <a href="#">Add to cart</a>
            <img src="/images/icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCarousel({ title, items, slidesToShow=5 }){
  const settings = {
    slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 520,  settings: { slidesToShow: 1 } },
    ]
  };
  return (
    <section className="product_slider">
      <div className="container-xxl">
        <div className="section-head"><h2>{title}</h2></div>
        <div className="border-line"></div>
        <Slider {...settings}>
          {items.map((it, idx) => (<Card item={it} key={idx} />))}
        </Slider>
      </div>
    </section>
  )
}
export default ProductCarousel;
