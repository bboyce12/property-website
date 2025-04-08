import "./WhyUsPage.css";
import { gsap_transformation } from "../js/gsap.js";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import experience from "../assets/whyus-experience.jpg";
import personlized from "../assets/whyus-personlized.jpg";
import listing from "../assets/whyus-listing.jpg";
import transparency from "../assets/whyus-transparency.jpg";

function WhyUsPage() {
  useGSAP(() => {
    gsap_transformation();
  }, []);

  return (
    <>
      <div className="page-container">
        <div className="left-container">
          <div className="left-content">
            <h1>Why Us</h1>
            <div className="left-text">
              <section className="left-description">
                <h2>Expertise in Real Estate</h2>
                <ul>
                  <li>
                    Our team consists of seasoned professionals with extensive
                    knowledge of the local market. We provide insights and
                    guidance to help you make informed property decisions.
                  </li>
                  <li>
                    With years of experience, we understand the nuances of
                    buying, selling, and renting properties, ensuring a seamless
                    experience for our clients.
                  </li>
                </ul>
              </section>
              <section className="left-description">
                <h2>Personalized Service</h2>
                <ul>
                  <li>
                    We believe in a tailored approach. Our agents take the time
                    to understand your unique needs and preferences, providing
                    solutions that fit your lifestyle and budget.
                  </li>
                  <li>
                    From initial consultation to closing, we are committed to
                    being by your side every step of the way, ensuring you feel
                    supported and informed.
                  </li>
                </ul>
              </section>
              <section className="left-description">
                <h2>Comprehensive Listings</h2>
                <ul>
                  <li>
                    Our extensive database features a wide range of properties,
                    from cozy apartments to luxurious estates. Whatever your
                    requirements, we have options that will meet your
                    expectations.
                  </li>
                  <li>
                    We regularly update our listings to ensure that you have
                    access to the latest properties on the market, giving you a
                    competitive edge.
                  </li>
                </ul>
              </section>
              <section className="left-description">
                <h2>Transparent Process</h2>
                <ul>
                  <li>
                    We prioritize transparency and integrity in all our
                    dealings. You will receive clear communication throughout
                    the buying or selling process, with no hidden fees or
                    surprises.
                  </li>
                  <li>
                    Our commitment to ethical practices means you can trust us
                    to represent your best interests, fostering long-term
                    relationships built on trust.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="right-content">
            <div className="right-card">
              <img
                className="desktopPhoto"
                src={experience}
                alt="desktopPhoto-experience"
              />
              <img
                className="desktopPhoto"
                src={personlized}
                alt="desktopPhoto-personlized"
              />
              <img
                className="desktopPhoto"
                src={listing}
                alt="desktopPhoto-listing"
              />
              <img
                className="desktopPhoto"
                src={transparency}
                alt="desktopPhoto-transparency"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUsPage;
