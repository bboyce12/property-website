import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./Home.css";
import AboutUs from "../AboutUs";
import ReviewCarousel from "../ReviewCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
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
function Home() {
    useGSAP(() => {
        // GSAP for past success
        two_column_img_transformation();
        // GSAP for our values
        our_values_transformation();
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "container text-center fade-in-container", id: "two-sides-container", children: [_jsx("div", { className: "col", id: "left-container", children: _jsxs("div", { className: "content", children: [_jsx("h5", { children: "SALES" }), _jsx("h3", { children: "Expert Care Without Exception From a Market leading Estate Agency." }), _jsxs("div", { className: "button-container", children: [_jsx("a", { href: "./propertyinfo/sale/all", children: _jsx("button", { children: "Properties For Sale" }) }), _jsx("a", { href: "./valuationform", children: _jsx("button", { children: "Book Valuation" }) })] })] }) }), _jsx("div", { className: "col", id: "right-container", children: _jsxs("div", { className: "content", children: [_jsx("h5", { children: "RENTAL" }), _jsx("h3", { children: "A Stress-Free Experience from our award-winning Rentals Team." }), _jsxs("div", { className: "button-container", children: [_jsx("a", { href: "/propertyinfo/let/open", children: _jsx("button", { children: "Properties To Rent" }) }), _jsx("a", { href: "./valuationform", children: _jsx("button", { children: "Book Valuation" }) })] })] }) })] }), _jsxs("div", { className: "past-success-container", children: [_jsxs("div", { className: "past-success-left-img-container", children: [_jsx("img", { className: "past-success-left-img-content", src: past_success_residential, alt: "past-success-residential" }), _jsx("img", { className: "past-success-left-img-content", src: past_success_commercial, alt: "past-success-commercial" }), _jsx("img", { className: "past-success-left-img-content", src: past_success_investment, alt: "past-success-investment" })] }), _jsxs("div", { className: "past-success-content-container", children: [_jsx("h1", { children: "Some Of Our Work" }), _jsx("p", { id: "past-success-text", children: "We proudly serve six key sectors: Residential Real Estate, Commercial Real Estate, Property Management, Real Estate Investment, Luxury Properties, and Sustainable Developments." })] }), _jsxs("div", { className: "past-success-right-img-container", children: [_jsx("img", { className: "past-success-right-img-content", src: past_success_luxury, alt: "past-success-luxury" }), _jsx("img", { className: "past-success-right-img-content", src: past_success_property_management, alt: "past-success-property-management" }), _jsx("img", { className: "past-success-right-img-content", src: past_success_sustainable, alt: "past-success-sustainable" })] })] }), _jsx("div", { className: "our-values-container", children: _jsxs("div", { className: "our-values-content", children: [_jsx("div", { className: "our-values-background", children: _jsx("img", { src: home_our_values, alt: "our-values-background" }) }), _jsx("div", { className: "our-values-description-container", children: _jsxs("div", { className: "our-values-description", children: [_jsx("h1", { children: "Our values" }), _jsx("p", { children: "We prioritize integrity and transparency, ensuring trust in every interaction. Our customer-centric approach drives us to exceed expectations." })] }) })] }) }), _jsx(AboutUs, {}), _jsx(ReviewCarousel, {})] }));
}
export default Home;
