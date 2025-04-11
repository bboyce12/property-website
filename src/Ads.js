import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import propertyImage from "./assets/property-image1.jpg";
import bedroomIcon from "./assets/bedroom-icon-black.png";
import bathroomIcon from "./assets/bathroom-icon-black.png";
import receptionIcon from "./assets/reception-icon-black.png";
import videoPlayIcon from "./assets/video-play-icon.svg";
import "./Ads.css";
function Ads({ propertyInfo, shortlistInfo, shortlistHandler }) {
    return (_jsx("a", { href: `/property/sale?property_id=${propertyInfo.property_id}&asking_type=${propertyInfo.asking_type}`, style: { textDecoration: "none", color: "inherit" }, children: _jsxs("div", { className: "ad-container col", children: [_jsxs("div", { className: "ad-upper-container", children: [_jsx("img", { src: propertyImage, alt: "Property" }), _jsx("div", { className: "video-display-block", children: _jsx("img", { src: videoPlayIcon, alt: "PlayIcon" }) }), _jsx("div", { className: "video-display-text-block", children: _jsx("h3", { children: "Video walkthrough available " }) }), propertyInfo.status.toLowerCase() ==
                            "open" ? null : propertyInfo.status.toLowerCase() == "hold" ? (_jsx("div", { className: "status-display-block", children: _jsx("h3", { children: "HOLD" }) })) : (_jsx("div", { className: "status-display-block", children: _jsx("h3", { children: "SOLD STC" }) })), _jsx("div", { className: "price-display-block", children: _jsxs("h3", { children: ["\u00A3", propertyInfo.price] }) })] }), _jsxs("div", { className: "ad-lower-container", children: [_jsxs("h2", { children: [propertyInfo.address, ", ", propertyInfo.postcode] }), _jsxs("div", { className: "icon-container", children: [_jsxs("div", { children: [_jsx("img", { className: "icon", src: bedroomIcon, alt: "" }), _jsx("h4", { children: propertyInfo.bedroom })] }), _jsxs("div", { children: [_jsx("img", { className: "icon", src: bathroomIcon, alt: "" }), _jsx("h4", { children: propertyInfo.bathroom })] }), _jsxs("div", { children: [_jsx("img", { className: "icon", src: receptionIcon, alt: "" }), _jsx("h4", { children: propertyInfo.livingroom })] })] }), _jsx("div", { className: "shortlist-container", onClick: (event) => {
                                event.preventDefault();
                                shortlistHandler(propertyInfo.property_id);
                            }, children: shortlistInfo.includes(propertyInfo.property_id) ? "🤍" : "♡" })] })] }) }));
}
export default Ads;
