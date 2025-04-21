import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import bedroomIcon from "../assets/bedroom-icon-white.png";
import bathroomIcon from "../assets/bathroom-icon-white.png";
import receptionIcon from "../assets/reception-icon-white.png";
import videoPlayIcon from "../assets/video-play-icon.svg";
import property_image1 from "../assets/property-image-1.webp";
import "./PropertyForSale.css";
import EnquiryForm from "../EnquiryForm";
import PropertyImageGallery from "../PropertyImageGallery.js";
import PropertyImages from "../PropertyImages.js";
import SkeletonPropertyForSale from "../SkeletonPropertyForSale";
import { scrollTo } from "../js/scrollTo.js";

function PropertyForSale() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [features, setFeatures] = useState(null);
  const [descriptionInfo, setDescriptionInfo] = useState(null);
  const [displayGallery, setDisplayGallery] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const propertyId = queryParams.get("property_id");
  const askingType = queryParams.get("asking_type");

  const closeGallery = () => {
    setDisplayGallery(false);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://apex.oracle.com/pls/apex/boyce/propertyinfosale/getPropertyInfo?property_id=${propertyId}&asking_type=${askingType}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      // needs change after redirect to specific property id
      // Splitting features into bullet points
      const featuresArray = result.items[0].features.split("\n");
      setFeatures(featuresArray);
      // Splitting description into paragraphs
      const descriptionInfoArray = result.items[0].description_info.split("\n");
      setDescriptionInfo(descriptionInfoArray);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("loading state changed to: ", loading);
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="skeleton-property-container">
          <div className="skeleton-property-button-container">
            <div className="skeleton-property-button"></div>
            <div className="skeleton-property-button"></div>
            <div className="skeleton-property-button"></div>
          </div>
        </div>
      ) : (
        <div>
          {data.items.map((property) => (
            <div key={property.id} className="property-whole-container">
              {displayGallery && (
                <PropertyImageGallery closeGallery={closeGallery} />
              )}

              <div className="summary-container">
                <div>
                  {property.address}, {property.postcode}
                </div>
                <div>£{property.price}</div>
                <div className="icon-container">
                  <div>
                    <img className="icon" src={bedroomIcon} alt=""></img>
                    <h4>{property.bedroom}</h4>
                  </div>
                  <div>
                    <img className="icon" src={bathroomIcon} alt=""></img>
                    <h4>{property.bathroom}</h4>
                  </div>
                  <div>
                    <img className="icon" src={receptionIcon} alt=""></img>
                    <h4>{property.livingroom}</h4>
                  </div>
                </div>
                <div className="button-container">
                  <button
                    onClick={() => {
                      scrollTo("property-image");
                    }}
                  >
                    Images
                  </button>
                  <button
                    onClick={() => {
                      scrollTo("property-video");
                    }}
                  >
                    Video
                  </button>
                  <button
                    onClick={() => {
                      scrollTo("property-floorplan");
                    }}
                  >
                    Floor Plan
                  </button>
                </div>
              </div>
              <div className="property-bottom-container">
                <div className="property-bottom-left-container">
                  <h1>
                    {property.address} {property.postcode} (ID:
                    {property.property_id}, status: {property.status})
                  </h1>
                  <div className="property-container feature-container">
                    <div>
                      <h2>Features</h2>
                      <ul>
                        {features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className="property-container image-container"
                    id="property-image"
                  >
                    <h2>Images</h2>
                    <PropertyImages />
                    <button onClick={() => setDisplayGallery((prev) => !prev)}>
                      See gallery
                    </button>
                  </div>
                  <div
                    className="property-container video-content-container"
                    id="property-video"
                  >
                    <h2>Video</h2>
                    <div className="video-container">
                      <iframe src={property.video_uri}></iframe>
                    </div>
                  </div>
                  <div className="property-container description-container">
                    {descriptionInfo.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <div
                    className="property-container floor-plan-container"
                    id="property-floorplan"
                  >
                    <h2>Floor Plan</h2>
                    <img
                      src={property.floor_plan_uri}
                      className="floor-plan-img"
                    />
                  </div>
                </div>
                <div className="property-bottom-right-container">
                  <EnquiryForm />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default PropertyForSale;
