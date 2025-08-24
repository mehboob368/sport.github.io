import React from "react";
import "./HeaderSearch.css";

function HeaderSearch(){
  return (
    <header className="nav_bar_header">
      <div className="container-xxl">
        <div className="row header-row">
          <div className="col logo">
            <img src="images/logo_140x40_crop_center@2x.png" alt="Logo" />
          </div>
          <div className="col search">
            <form onSubmit={(e)=> e.preventDefault()}>
              <input type="text" placeholder="Search" />
              <button>
                <img src="images/logo.svg" alt="Search"/>
              </button>
            </form>
          </div>
          <div className="col cart">
            <img src="images/cart.svg" alt="Cart"/>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </header>
  )
}
export default HeaderSearch;
