import React, { useState } from "react";
import "./Newsletter.css";

function Newsletter(){
  const [msg, setMsg] = useState("");
  const submit = (e) => {
    e.preventDefault();
    setMsg("Thanks! Coupon will arrive in your inbox soon.");
    e.currentTarget.reset();
  };
  return (
    <section className="form-box">
      <div className="container-xxl">
        <div className="newsletter">
          <div className="caption">
            <h4>Newsletter Sign Up</h4>
            <p><span>Get 30% OFF</span> coupon today subscribers</p>
          </div>
          <div className="info">
            <p><u>Join 226.000+ subscribers</u> and get a new discount coupon every Monday.</p>
          </div>
          <form className="form" onSubmit={submit}>
            <input type="email" placeholder="Enter your email" required />
            <button className="btn" type="submit">Submit</button>
          </form>
        </div>
        {msg && <p className="status">{msg}</p>}
      </div>
    </section>
  )
}
export default Newsletter;
