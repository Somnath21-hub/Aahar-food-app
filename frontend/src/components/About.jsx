import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
             Aahar is a modern and user-friendly food application designed to enhance both food delivery and cooking experiences. The app serves as a one-stop solution for users looking to explore a variety of recipes, order delicious meals, and manage their dietary preferences with ease. With features like a dynamic navigation menu, smooth scrolling, and a responsive design, Aahar ensures a seamless browsing experience across devices. Users can discover curated recipes, learn step-by-step cooking instructions, and even customize their meals based on nutritional needs. Whether you're a home cook seeking inspiration or someone craving a quick bite from your favorite restaurant, Aahar blends convenience and creativity to satisfy every appetite.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;