import propertyImage from "./assets/property-image1.jpg";
import bedroomIcon from "./assets/bedroom-icon-black.png";
import bathroomIcon from "./assets/bathroom-icon-black.png";
import receptionIcon from "./assets/reception-icon-black.png";
import videoPlayIcon from "./assets/video-play-icon.svg";

import "./Ads.css";

function Ads({ propertyInfo, shortlistInfo, shortlistHandler }) {
  return (
    <a
      href={`/property/sale?property_id=${propertyInfo.property_id}&asking_type=${propertyInfo.asking_type}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="ad-container col">
        <div className="ad-upper-container">
          <img src={propertyImage} alt="Property" />
          <div className="video-display-block">
            <img src={videoPlayIcon} alt="PlayIcon" />
          </div>
          <div className="video-display-text-block">
            <h3>Video walkthrough available </h3>
          </div>
          {/* Display status symbol */}
          {propertyInfo.status.toLowerCase() ==
          "open" ? null : propertyInfo.status.toLowerCase() == "hold" ? (
            <div className="status-display-block">
              <h3>HOLD</h3>
            </div>
          ) : (
            <div className="status-display-block">
              <h3>SOLD STC</h3>
            </div>
          )}

          <div className="price-display-block">
            <h3>£{propertyInfo.price}</h3>
          </div>
        </div>
        <div className="ad-lower-container">
          <h2>
            {propertyInfo.address}, {propertyInfo.postcode}
          </h2>
          <div className="icon-container">
            <div>
              <img className="icon" src={bedroomIcon} alt=""></img>
              <h4>{propertyInfo.bedroom}</h4>
            </div>
            <div>
              <img className="icon" src={bathroomIcon} alt=""></img>
              <h4>{propertyInfo.bathroom}</h4>
            </div>
            <div>
              <img className="icon" src={receptionIcon} alt=""></img>
              <h4>{propertyInfo.livingroom}</h4>
            </div>
          </div>
          <div
            className="shortlist-container"
            onClick={(event) => {
              event.preventDefault();
              shortlistHandler(propertyInfo.property_id);
            }}
          >
            {shortlistInfo.includes(propertyInfo.property_id) ? "🤍" : "♡"}
          </div>
        </div>
      </div>
    </a>
  );
}

export default Ads;

// Image attribute
//<a href="https://www.flaticon.com/free-icons/bed" title="bed icons">Bed icons created by xnimrodx - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/bathroom" title="bathroom icons">Bathroom icons created by Smashicons - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/living-room" title="living room icons">Living room icons created by SBTS2018 - Flaticon</a>
