import { useState } from "react";
import property_image1 from "./assets/property-image-1.webp";
import property_image2 from "./assets/property-image-2.webp";
import property_image3 from "./assets/property-image-3.webp";
import "./PropertyImages.css";

function PropertyImages() {
  const property_images = [property_image2, property_image3];
  return (
    <div className="images-gallery-container">
      <img id="larger-img" src={property_image1}></img>
      {property_images.map((property_image, i) => (
        <img key={i} src={property_image} alt="property-image" />
      ))}
    </div>
  );
}

export default PropertyImages;
