import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery";
import "popper.js";
import { fadeIn } from "./js/fadeIn";
import AboutUs from "./AboutUs";
import Navbar from "./Navbar";
import ReviewPage from "./pages/ReviewPage";
import PropertyForSale from "./pages/PropertyForSale";
import SavedProperty from "./pages/SavedProperty";
import StampDutyCalculator from "./StampDutyCalculator";
import ValuationForm from "./ValuationForm";
import GetInTouch from "./GetInTouch";
import WhyUsPage from "./pages/WhyUsPage";
import { useEffect } from "react";
export default function App() {
    useEffect(() => {
        fadeIn();
    }, []);
    return (_jsxs(Router, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/propertyinfo/:asking_type/:status", element: _jsx(Sales, {}) }), _jsx(Route, { path: "/savedproperty/:asking_type/", element: _jsx(SavedProperty, {}) }), _jsx(Route, { path: "/about/aboutus", element: _jsx(AboutUs, {}) }), _jsx(Route, { path: "/about/reviews", element: _jsx(ReviewPage, {}) }), _jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/property/sale", element: _jsx(PropertyForSale, {}) }), _jsx(Route, { path: "/stampdutycalculator", element: _jsx(StampDutyCalculator, {}) }), _jsx(Route, { path: "/getintouch", element: _jsx(GetInTouch, {}) }), _jsx(Route, { path: "/valuationform", element: _jsx(ValuationForm, {}) }), _jsx(Route, { path: "/whyus", element: _jsx(WhyUsPage, {}) })] })] }));
}
