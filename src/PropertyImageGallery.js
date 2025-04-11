import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import property_image1 from "./assets/property-image-1.webp";
import property_image2 from "./assets/property-image-2.webp";
import property_image3 from "./assets/property-image-3.webp";
import property_image4 from "./assets/property-image-4.webp";
import property_image5 from "./assets/property-image-5.webp";
import property_image6 from "./assets/property-image-6.webp";
import property_image7 from "./assets/property-image-7.webp";
import property_image8 from "./assets/property-image-8.webp";
import property_image9 from "./assets/property-image-9.webp";
import "./PropertyImageGallery.css";
import { useState } from "react";
function PropertyImageGallery({ closeGallery }) {
    const property_images = [
        property_image1,
        property_image2,
        property_image3,
        property_image4,
        property_image5,
        property_image6,
        property_image7,
        property_image8,
        property_image9,
    ];
    const [selectedImage, setSelectedImage] = useState(property_image1);
    return (_jsxs("div", { className: "gallery-container", children: [_jsx("div", { className: "gallery-left-container", children: property_images.map((propertyImage, i) => (_jsx("img", { onClick: () => setSelectedImage(propertyImage), src: propertyImage }, i))) }), _jsxs("div", { className: "gallery-right-container", children: [_jsx("button", { onClick: closeGallery, children: "Close" }), _jsx("div", { className: "focus-image-conatiner", children: selectedImage && _jsx("img", { src: selectedImage, alt: "Selected-property" }) })] })] }));
}
export default PropertyImageGallery;
