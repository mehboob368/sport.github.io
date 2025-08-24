import React, {useState} from "react";
import "./Navbar.css";

function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="container-xxl">
        <button className={"burger " + (open ? "active" : "")} onClick={()=> setOpen(v=>!v)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <ul className={"nav1 " + (open ? "open" : "")}>
          <li className="dropdown"><a href="#">Home</a></li>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Catalog</a></li>
          <li><a href="#">Sale</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About us</a></li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar;
