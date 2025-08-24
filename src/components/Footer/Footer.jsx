import React from "react";
import "./Footer.css";

function Col({title, items}){
  return (
    <div className="col">
      <h6>{title}</h6>
      <ul>
        {items.map(i => (<li key={i}><a href="#">{i}</a></li>))}
      </ul>
    </div>
  )
}

function Footer(){
  return (
    <footer className="footer">
      <div className="container-xxl">
        <div className="row">
          <Col title="Your Account" items={["Personal info","My Orders","My cart","Addresses"]} />
          <Col title="Customer Service" items={["Monday to Friday","10am - 6.30pm (NewYork time)","+(001) 23 45 67 89","Send us a message"]} />
          <Col title="Our Guarantees" items={["Shipping in 3 days","Free returns within 14 days","Secure payments"]} />
          <Col title="Our Company" items={["About us","Contact us","Search","Delivery info","Privacy Policy"]} />
        </div>
      </div>
    </footer>
  )
}
export default Footer;
