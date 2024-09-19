import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      <Navbar/>

      <div className="about-story">
  <h2>Our Story</h2>
  <p>
    At FoodieHub, we started with a simple goal: to bring authentic, fresh, and delicious meals to food lovers everywhere.
    What began as a small family-owned restaurant has now become a favorite destination for those looking for high-quality,
    hand-prepared dishes with a modern twist. From our humble beginnings in a cozy kitchen, we've grown, but our commitment to 
    using only the freshest ingredients and keeping the heart in our food has never changed.
  </p>
</div>
<div className="about-ingredients">
  <h2>Fresh Ingredients, Always</h2>
  <p>
    We believe that great food starts with the best ingredients. That's why we work closely with local farmers and suppliers 
    to ensure that every dish is made from fresh, sustainable, and high-quality ingredients. From our handpicked vegetables 
    to our responsibly sourced seafood, you can taste the difference in every bite.
  </p>
</div>
<div className="about-experience">
  <h2>Our Dining Experience</h2>
  <p>
    At FoodieHub, we believe that great food should be accompanied by an unforgettable experience. Our team is dedicated to 
    creating a warm, welcoming environment where guests feel like family. Whether you're joining us for a quick lunch or 
    a special occasion, we're here to make every moment memorable.
  </p>
</div>

    </div>
  );
}

export default About;
