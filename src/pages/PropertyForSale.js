import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import bedroomIcon from "../assets/bedroom-icon-white.png";
import bathroomIcon from "../assets/bathroom-icon-white.png";
import receptionIcon from "../assets/reception-icon-white.png";
import "./PropertyForSale.css";
import EnquiryForm from "../EnquiryForm";
import PropertyImageGallery from "../PropertyImageGallery.js";
import PropertyImages from "../PropertyImages.js";
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
            const response = await fetch(`https://apex.oracle.com/pls/apex/boyce/propertyinfosale/getPropertyInfo?property_id=${propertyId}&asking_type=${askingType}`);
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
        }
        catch (err) {
            console.log(err);
            setError(err);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        console.log("loading state changed to: ", loading);
    }, [loading]);
    return (_jsx(_Fragment, { children: loading ? (_jsx("div", { className: "skeleton-property-container", children: _jsxs("div", { className: "skeleton-property-button-container", children: [_jsx("div", { className: "skeleton-property-button" }), _jsx("div", { className: "skeleton-property-button" }), _jsx("div", { className: "skeleton-property-button" })] }) })) : (_jsx("div", { children: data.items.map((property) => (_jsxs("div", { className: "property-whole-container", children: [displayGallery && (_jsx(PropertyImageGallery, { closeGallery: closeGallery })), _jsxs("div", { className: "summary-container", children: [_jsxs("div", { children: [property.address, ", ", property.postcode] }), _jsxs("div", { children: ["\u00A3", property.price] }), _jsxs("div", { className: "icon-container", children: [_jsxs("div", { children: [_jsx("img", { className: "icon", src: bedroomIcon, alt: "" }), _jsx("h4", { children: property.bedroom })] }), _jsxs("div", { children: [_jsx("img", { className: "icon", src: bathroomIcon, alt: "" }), _jsx("h4", { children: property.bathroom })] }), _jsxs("div", { children: [_jsx("img", { className: "icon", src: receptionIcon, alt: "" }), _jsx("h4", { children: property.livingroom })] })] }), _jsxs("div", { className: "button-container", children: [_jsx("button", { onClick: () => {
                                            scrollTo("property-image");
                                        }, children: "Images" }), _jsx("button", { onClick: () => {
                                            scrollTo("property-video");
                                        }, children: "Video" }), _jsx("button", { onClick: () => {
                                            scrollTo("property-floorplan");
                                        }, children: "Floor Plan" })] })] }), _jsxs("div", { className: "property-bottom-container", children: [_jsxs("div", { className: "property-bottom-left-container", children: [_jsxs("h1", { children: [property.address, " ", property.postcode, " (ID:", property.property_id, ", status: ", property.status, ")"] }), _jsx("div", { className: "property-container feature-container", children: _jsxs("div", { children: [_jsx("h2", { children: "Features" }), _jsx("ul", { children: features.map((feature, index) => (_jsx("li", { children: feature }, index))) })] }) }), _jsxs("div", { className: "property-container image-container", id: "property-image", children: [_jsx("h2", { children: "Images" }), _jsx(PropertyImages, {}), _jsx("button", { onClick: () => setDisplayGallery((prev) => !prev), children: "See gallery" })] }), _jsxs("div", { className: "property-container video-content-container", id: "property-video", children: [_jsx("h2", { children: "Video" }), _jsx("div", { className: "video-container", children: _jsx("iframe", { src: property.video_uri }) })] }), _jsx("div", { className: "property-container description-container", children: descriptionInfo.map((paragraph, index) => (_jsx("p", { children: paragraph }, index))) }), _jsxs("div", { className: "property-container floor-plan-container", id: "property-floorplan", children: [_jsx("h2", { children: "Floor Plan" }), _jsx("img", { src: property.floor_plan_uri })] })] }), _jsx("div", { className: "property-bottom-right-container", children: _jsx(EnquiryForm, {}) })] })] }, property.id))) })) }));
}
export default PropertyForSale;
