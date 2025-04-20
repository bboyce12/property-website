import { Route, Routes } from "react-router";
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
import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import Nav from "./Navbar";

export default function App() {
  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/propertyinfo/:asking_type/:status" element={<Sales />} />
        <Route
          path="/savedproperty/:asking_type/"
          element={<SavedProperty />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/about/aboutus" element={<AboutUs />} />
        <Route path="/about/reviews" element={<ReviewPage />} />
        <Route path="/property/sale" element={<PropertyForSale />} />
        <Route path="/stampdutycalculator" element={<StampDutyCalculator />} />
        <Route path="/getintouch" element={<GetInTouch />} />
        <Route path="/valuationform" element={<ValuationForm />} />
        <Route path="/whyus" element={<WhyUsPage />} />
      </Routes>
    </>
  );
}
