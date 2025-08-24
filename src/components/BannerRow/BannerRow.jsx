import React from "react";
import "./BannerRow.css";

function Banner({img, title, big, text}){
  return (
    <div className="banner card_product">
      <img src={img} alt={title} />
      <div className="overlay">
        <a href="#" className="text-box">
          <h4>{title}</h4>
          <h2>{big.split("\n").map((l,i)=>(<p key={i}>{l}</p>))}</h2>
          <p className="banner_text">{text}</p>
        </a>
      </div>
    </div>
  )
}

function BannerRow(){
  return (
    <section className="banner-row">
      <div className="container-xxl grid">
        <Banner img="images/banner1_895x700_crop_center.webp" title="LIMITED TIME OFFER!" big={"SAVE 20%"} text="On Football Balls!" />
        <Banner img="images/banner2_895x700_crop_center.webp" title="UP TO 30% OFF!" big={"FOOTBALL\nHELMETS"} text="We offer the best products at affordable prices." />
      </div>
    </section>
  )
}
export default BannerRow;
