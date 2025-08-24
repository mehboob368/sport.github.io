import React from "react";
import TopBar from "./components/TopBar/TopBar";
import HeaderSearch from "./components/HeaderSearch/HeaderSearch";
import Navbar from "./components/Navbar/Navbar";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import CategoryGrid from "./components/CategoryGrid/CategoryGrid";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import BannerRow from "./components/BannerRow/BannerRow";
import OffersCarousel from "./components/OffersCarousel/OffersCarousel";
import BrandsCarousel from "./components/BrandsCarousel/BrandsCarousel";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/FooterBottom/FooterBottom";

const popularProducts = [
  { title: "Wilson Ncaa Red Z...", price: "$1,400.00 - $1,700.00", discount:"-26%", isNew:true, img:"images/wilson_ncaa_red_zone_series_composite_football_official_size_1_346x399_crop_top.webp" },
  { title: "Adidas Adizero 8 ...", price: "$1,400.00 - $1,700.00", discount:"-56%", isNew:true, img:"images/adidas_adizero_8_0_all_american_pack_receivers_football_gloves_1_346x399_crop_top.webp" },
  { title: "Wilson Nfl Compos...", price: "$1,400.00 - $1,700.00", discount:null, isNew:true, img:"images/wilson_nfl_composite_football_with_pump_and_tee_junior_1_346x399_crop_top.webp" },
  { title: "Champro Youth Sco...", price: "$1,400.00 - $1,700.00", discount:"-9%", isNew:true, img:"images/champro_youth_scorpion_football_shoulder_pads_1_346x399_crop_top.webp" },
  { title: "Wilson The Duke N...", price: "$1,400.00 - $1,700.00", discount:"-11%", isNew:true, img:"images/wilson_the_duke_nfl_official_game_football_1_346x399_crop_top.webp" },
  { title: "Football America ...", price: "$1,400.00 - $1,700.00", discount:"-20%", isNew:true, img:"images/football_america_youth_integrated_football_pant_1_346x399_crop_top.webp" },
  { title: "Grip Boost Stealt...", price: "$1,400.00 - $1,700.00", discount:null, isNew:true, img:"images/grip_boost_stealth_solid_youth_football_gloves_pro_elite_youth_sizes_1_346x399_crop_top.webp" },
  { title: "Schutt F7 Profess...", price: "$1,400.00 - $1,700.00", discount:null, isNew:true, img:"images/schutt_f7_professional_youth_football_helmet_1_346x399_crop_top.webp" },
  { title: "Under Armour Men ...", price: "$1,400.00 - $1,700.00", discount:null, isNew:true, img:"images/under_armour_men_ua_hammer_mid_rubber_molded_football_cleats_1_346x399_crop_top.webp" },
];

const bestsellers = [
  { title: "Adidas Adizero 8 ...", price: "$1,400.00 - $1,700.00", discount:"-56%", isNew:true, img:"images/adidas_adizero_8_0_all_american_pack_receivers_football_gloves_1_346x399_crop_top.webp" },
  { title: "Champro Amt 1000 ...", price: "$1,400.00 - $1,700.00", discount:null, isNew:true, img:"images/champro_amt_1000_varsity_shoulder_pad_1_346x399_crop_top (1).webp" },
  { title: "Football America ...", price: "$1,400.00 - $1,700.00", discount:"-20%", isNew:true, img:"images/football_america_youth_integrated_football_pant_1_346x399_crop_top.webp" },
  { title: "Grip Boost Stealt...", price: "$1,400.00 - $1,700.00", discount:null, isNew:true, img:"images/grip_boost_stealth_solid_youth_football_gloves_pro_elite_youth_sizes_1_346x399_crop_top.webp" },
  { title: "Riddell Speedflex...", price: "$1,400.00 - $1,700.00", discount:"-17%", isNew:true, img:"images/riddell_speedflex_youth_helmet_1_346x399_crop_top.webp" },
  { title: "Champro Youth Sco...", price: "$1,400.00 - $1,700.00", discount:"-9%", isNew:true, img:"images/champro_youth_scorpion_football_shoulder_pads_1_346x399_crop_top.webp" },
  { title: "Schutt Y Flex 4 0...", price: "$1,400.00 - $1,700.00", discount:"-26%", isNew:true, img:"images/schutt_y_flex_4_0_youth_shoulder_pad_1_346x399_crop_top.webp" },
  { title: "Schutt F7 Profess...", price: "$1,400.00 - $1,700.00", discount:null, isNew:true, img:"images/schutt_f7_professional_youth_football_helmet_1_346x399_crop_top.webp" },
  { title: "Venum Contender 4...", price: "$1,400.00 - $1,700.00", discount:null, isNew:true, img:"images/venum_contender_4_0_spats_1_346x399_crop_top.webp" },
];

const brands = [
  "images/Rectangle_220x160_crop_top.webp",
  "images/Rectangle_1_220x160_crop_top.avif",
  "images/Rectangle_2_220x160_crop_top.webp",
  "images/Rectangle_3_220x160_crop_top.avif",
  "images/Rectangle_4_220x160_crop_top.avif",
  "images/Rectangle_5_220x160_crop_top.avif",
  "images/Rectangle_6_220x160_crop_top.avif",
];

function App() {
  return (
    <>
     <div style={{paddingBottom:"15px"}}><TopBar /></div>
         <div style={{paddingBottom:"15px"}}><HeaderSearch /></div>
         <div style={{paddingBottom:"15px"}}><Navbar /></div>
         <div style={{paddingBottom:"15px"}}><HeroSlider /></div>
         <div style={{paddingBottom:"15px"}}><CategoryGrid /></div>
         <div style={{paddingBottom:"55px"}}><ProductCarousel title="Popular Products" items={popularProducts} slidesToShow={5} /></div>
          <div style={{paddingBottom:"35px"}}><BannerRow /></div>
          <div style={{paddingBottom:"35px"}}><ProductCarousel title="Bestsellers" items={bestsellers} slidesToShow={5} /></div>
          <div style={{paddingBottom:"35px"}}><OffersCarousel /></div>
          <div style={{paddingBottom:"35px"}}><BrandsCarousel items={brands} /></div>
          <div style={{paddingBottom:"35px"}}><Newsletter /></div>
          <div style={{paddingBottom:"15px"}}><Footer /></div>
          <FooterBottom />
     
    </>
  );
}

export default App;
