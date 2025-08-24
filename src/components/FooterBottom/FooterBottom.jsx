import React from "react";
import "./FooterBottom.css";

function FooterBottom(){
  return (
    <div className="footer-bottom">
      <div className="container-xxl row">
        <p>© {new Date().getFullYear()}. Powered by Shopify</p>
        <ul className="socials">
          <li><a href="#"><i className="fa-brands fa-facebook-f"/></a></li>
          <li><a href="#"><i className="fab fa-twitter"/></a></li>
          <li><a href="#"><i className="fab fa-instagram"/></a></li>
          <li><a href="#"><i className="fab fa-pinterest"/></a></li>
          <li><a href="#"><i className="fab fa-youtube"/></a></li>
        </ul>
      </div>
    </div>
  )
}
export default FooterBottom;
