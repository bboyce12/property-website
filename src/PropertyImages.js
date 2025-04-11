import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import property_image1 from "./assets/property-image-1.webp";
import property_image2 from "./assets/property-image-2.webp";
import property_image3 from "./assets/property-image-3.webp";
import "./PropertyImages.css";
function PropertyImages() {
    const property_images = [property_image2, property_image3];
    return (_jsxs("div", { className: "images-gallery-container", children: [_jsx("img", { id: "larger-img", src: property_image1 }), property_images.map((property_image, i) => (_jsx("img", { src: property_image, alt: "property-image" }, i)))] }));
}
export default PropertyImages;
