import rightmoveLogo from "./assets/rightmove-logo.png";
import onthemarketLogo from "./assets/onTheMarket-logo.png";
import zooplaLogo from "./assets/zoopla-logo.png";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <div className="container fade-in-container" id="about-us-container">
        <h1>About Us</h1>
        <div className="container" id="about-us-content-container">
          <div className="container" id="about-us-text-container">
            <p>
              Since 2010, AltyProperty has established itself as one of the
              leading Estate Agents in the area, specializing in Residential
              Sales and Property Rentals and Management.
            </p>

            <p>
              Operating from offices in Altrincham and Sale, with a dedicated
              Property Rentals office in Altrincham covering all areas, we sell
              and let properties across:
            </p>
            <ul>
              <li>Altrincham</li>
              <li>Hale</li>
              <li>Hale Barns</li>
              <li>Bowdon</li>
              <li>Timperley</li>
              <li>Sale</li>
              <li>Brooklands</li>
              <li>Sale Moor</li>
              <li>Ashton on Mersey</li>
            </ul>

            <p>
              Our 30-strong, close-knit team of property and logistics experts
              really love to help people find their way to their new home!
            </p>

            <h2>The Directors</h2>

            <div className="team-member">
              <h3>James A. Alty MNAEA MARLA</h3>
              <p>
                Principal, oversees the running of the business and is based at
                the Altrincham Office. He started his Estate Agency career in
                1995 and has lived in the area all his life.
              </p>
            </div>

            <div className="team-member">
              <h3>Sarah Jones MNAEA</h3>
              <p>
                Director of the Sale Office, joined a local Estate Agency in
                2000 before starting up AltyProperty alongside James. She lives
                in Timperley, having grown up in Sale.
              </p>
            </div>

            <div className="team-member">
              <h3>Emily Smith FNAEA</h3>
              <p>
                Director of the Altrincham Office and part of the AltyProperty
                team since 2008. Emily lives in Altrincham and has grown up in
                the area.
              </p>
            </div>

            <p>
              With directors of the business running the offices, you can be
              assured of a completely hands-on and personal service that can
              only be offered by an owner-run business.
            </p>
            <div className="about-us-ahref-container">
              <a href="/">Find Out More</a>
              <a href="/about/reviews">Our Reviews</a>
            </div>
          </div>

          <div className="container" id="about-us-award-container">
            <span> Find us on... </span>
            <img src={rightmoveLogo} alt="rightmove-logo"></img>
            <img src={onthemarketLogo} alt="onthemarket-logo"></img>
            <img src={zooplaLogo} alt="zoopla-logo"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
