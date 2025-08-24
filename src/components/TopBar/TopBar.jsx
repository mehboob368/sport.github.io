import React from "react";
import "./TopBar.css";

function TopBar(){
  return (
    <div className="top_bar">
      <div className="container-xxl">
        <div className="row">
          <div className="col left">
            <a className="content" href="#"><span>Call us:</span> +(001)-23-45-67-89</a>
          </div>
          <div className="col center">
            <a href="#"><span>15% off</span> the shipping of your first order!</a>
          </div>
          <div className="col right">
            <ul className="inline">
              <li><a className="account" href="#">Account</a></li>
              <li className="dropdown"><a href="#">USD</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TopBar;
