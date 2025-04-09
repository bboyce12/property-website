import { useState, useEffect } from "react";
import "./ValuationForm.css";
import { fadeIn } from "./js/fadeIn";

function ValuationForm() {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_tel: "",
    customer_address: "",
    customer_postcode: "",
    consent_checkbox: false,
  });
  // Fade-in effect
  useEffect(() => {
    fadeIn();
  }, []);

  const [error, setError] = useState(null);

  const changeData = (event) => {
    try {
      const { name, value } = event.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    } catch (err) {
      console.log(err);
      setError(err);
      console.log("Error", error);
    }
  };

  // Handle submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = formData;
    const successMessage = document.getElementById(
      "valuation-form-submit-success"
    );
    const failMessage = document.getElementById("valuation-form-submit-fail");

    // fetch data to API
    fetch(
      "https://apex.oracle.com/pls/apex/boyce/valuationbooking/submitbooking",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        if (!response.ok && failMessage) {
          failMessage.style.display = "block";
          throw new Error(`HTTP error. Status: ${response.status}`);
        } else {
          if (successMessage) {
            successMessage.style.display = "block";
            console.log("success");
          }
        }
        return data;
      })
      .then((data) => {
        console.log("Success", data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <div className="valuation-form-container fade-in-container">
      <h1>Value my property</h1>
      <form onSubmit={handleSubmit} className="valuation-form-grid container">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="customer_name">Full Name</label>
            <input
              type="text"
              id="customer_name"
              name="customer_name"
              required
              value={formData.customer_name}
              onChange={changeData}
            ></input>
          </div>
          <div className="col-md-6">
            <label htmlFor="customer_email">Email</label>
            <input
              type="text"
              id="customer_email"
              name="customer_email"
              required
              value={formData.customer_email}
              onChange={changeData}
            ></input>
          </div>
          <div className="col-md-6">
            <label htmlFor="customer_tel">Telephone</label>
            <input
              type="text"
              id="customer_tel"
              name="customer_tel"
              required
              value={formData.customer_tel}
              onChange={changeData}
            ></input>
          </div>
          <div className="col-md-6">
            <label htmlFor="customer_postcode">Postcode</label>
            <input
              type="text"
              id="customer_postcode"
              name="customer_postcode"
              required
              value={formData.customer_postcode}
              onChange={changeData}
            ></input>
          </div>
          <div className="col-md-12">
            <label htmlFor="customer_address">Address</label>
            <input
              type="text"
              id="customer_address"
              name="customer_address"
              required
              value={formData.customer_address}
              onChange={changeData}
            ></input>
          </div>
          <div id="form-checkbox-container" className="col-md-12">
            <label htmlFor="consent_checkbox">
              <input
                type="checkbox"
                id="consent_checkbox"
                name="consent_checkbox"
                required
              ></input>
              I agree to the terms and conditions.
            </label>
          </div>

          <button id="valuation-form-submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div id="valuation-form-submit-success">
        Booking successfully submitted. We will contact you as soon as possible.
      </div>
      <div id="valuation-form-submit-fail">
        Booking error, please try again.
      </div>
    </div>
  );
}

export default ValuationForm;
