import React from "react";
import "./CategoryGrid.css";

const items = [
  { img:"images/ico1_340x340_crop_top.webp", title:"Apparel" },
  { img:"images/ico2_340x340_crop_top.webp", title:"Protective" },
  { img:"images/ico3_340x340_crop_top.webp", title:"Balls" },
  { img:"images/ico4_340x340_crop_top.webp", title:"Shoes" },
  { img:"images/ico5_340x340_crop_top.webp", title:"Accessories" },
  { img:"images/ico6_340x340_crop_top.webp", title:"Equipment" },
];

function CategoryGrid(){
  return (
    <section className="image-section">
      <div className="container-xxl">
        <div className="grid">
          {items.map(i=> (
            <div className="image-box" key={i.title}>
              <img src={i.img} alt={i.title} />
              <div className="collection_caption"><h2>{i.title}</h2></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default CategoryGrid;
