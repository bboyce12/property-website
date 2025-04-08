import "./Home.css";
import Ads from "../Ads";
import AboutUs from "../AboutUs";
import ReviewCarousel from "../ReviewCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import image1 from "../assets/Image-1.png";
import home_our_values from "../assets/home-our-values.jpeg";
import past_success_residential from "../assets/past-success-residential.png";
import past_success_commercial from "../assets/past-success-commercial.jpeg";
import past_success_luxury from "../assets/past-success-luxury.jpg";
import past_success_property_management from "../assets/past-success-property-management.png";
import past_success_investment from "../assets/past-success-investment.jpg";
import past_success_sustainable from "../assets/past-success-sustainable.jpg";

import { useGSAP } from "@gsap/react";
import { two_column_img_transformation } from "../js/two_column_img_gsap.js";
import { our_values_transformation } from "../js/our_values.js";
import { useEffect } from "react";

function Home() {
  useGSAP(() => {
    // GSAP for past success
    two_column_img_transformation();
    // GSAP for our values
    our_values_transformation();
  }, []);

  return (
    <>
      <div
        className="container text-center fade-in-container"
        id="two-sides-container"
      >
        <div className="col" id="left-container">
          <div className="content">
            <h5>SALES</h5>
            <h3>
              Expert Care Without Exception From a Market leading Estate Agency.
            </h3>
            <div className="button-container">
              <a href="./propertyinfo/sale/all">
                <button>Properties For Sale</button>
              </a>
              <a href="./valuationform">
                <button>Book Valuation</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col" id="right-container">
          <div className="content">
            <h5>RENTAL</h5>
            <h3>
              A Stress-Free Experience from our award-winning Rentals Team.
            </h3>
            <div className="button-container">
              <a href="/propertyinfo/let/open">
                <button>Properties To Rent</button>
              </a>
              <a href="./valuationform">
                <button>Book Valuation</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="past-success-container">
        <div className="past-success-left-img-container">
          <img
            className="past-success-left-img-content"
            src={past_success_residential}
            alt="past-success-residential"
          ></img>
          <img
            className="past-success-left-img-content"
            src={past_success_commercial}
            alt="past-success-commercial"
          ></img>
          <img
            className="past-success-left-img-content"
            src={past_success_investment}
            alt="past-success-investment"
          ></img>
        </div>
        <div className="past-success-content-container">
          <h1>Some Of Our Work</h1>
          <p id="past-success-text">
            We proudly serve six key sectors: Residential Real Estate,
            Commercial Real Estate, Property Management, Real Estate Investment,
            Luxury Properties, and Sustainable Developments.
          </p>
        </div>
        <div className="past-success-right-img-container">
          <img
            className="past-success-right-img-content"
            src={past_success_luxury}
            alt="past-success-luxury"
          ></img>
          <img
            className="past-success-right-img-content"
            src={past_success_property_management}
            alt="past-success-property-management"
          ></img>
          <img
            className="past-success-right-img-content"
            src={past_success_sustainable}
            alt="past-success-sustainable"
          ></img>
        </div>
      </div>
      <div className="our-values-container">
        <div className="our-values-content">
          <div className="our-values-background">
            <img src={home_our_values} alt="our-values-background"></img>
          </div>
          <div className="our-values-description-container">
            <div className="our-values-description">
              <h1>Our values</h1>
              <p>
                We prioritize integrity and transparency, ensuring trust in
                every interaction. Our customer-centric approach drives us to
                exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AboutUs />
      <ReviewCarousel />
    </>
  );
}

export default Home;
