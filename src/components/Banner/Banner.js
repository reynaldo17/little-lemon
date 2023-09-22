import React from "react";
import food from '../Assets/food.jpeg';
import "./Banner.css"; // Import the stylesheet
// import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <header className="banner-header">
      <section className="banner-section">
        <div className="banner-text">
          <h2 className="banner-title">Little Lemon</h2>
          <h3 className="banner-location">New york</h3>
          <p className="banner-description">
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          {/* <Link to="/Booking" className="reserve-button" aria-label="Reserve Table"> */}
            Reserve Table
          {/* </Link> */}
        </div>
        <div className="banner-image">
          <img src={food} alt="menu food" />
        </div>
      </section>
    </header>
  );
}

export default Banner;