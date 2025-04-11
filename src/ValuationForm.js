import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        }
        catch (err) {
            console.log(err);
            setError(err);
            console.log("Error", error);
        }
    };
    // Handle submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = formData;
        const successMessage = document.getElementById("valuation-form-submit-success");
        const failMessage = document.getElementById("valuation-form-submit-fail");
        // fetch data to API
        fetch("https://apex.oracle.com/pls/apex/boyce/valuationbooking/submitbooking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
            if (!response.ok && failMessage) {
                failMessage.style.display = "block";
                throw new Error(`HTTP error. Status: ${response.status}`);
            }
            else {
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
    return (_jsxs("div", { className: "valuation-form-container fade-in-container", children: [_jsx("h1", { children: "Value my property" }), _jsx("form", { onSubmit: handleSubmit, className: "valuation-form-grid container", children: _jsxs("div", { className: "row", children: [_jsxs("div", { className: "col-md-6", children: [_jsx("label", { htmlFor: "customer_name", children: "Full Name" }), _jsx("input", { type: "text", id: "customer_name", name: "customer_name", required: true, value: formData.customer_name, onChange: changeData })] }), _jsxs("div", { className: "col-md-6", children: [_jsx("label", { htmlFor: "customer_email", children: "Email" }), _jsx("input", { type: "text", id: "customer_email", name: "customer_email", required: true, value: formData.customer_email, onChange: changeData })] }), _jsxs("div", { className: "col-md-6", children: [_jsx("label", { htmlFor: "customer_tel", children: "Telephone" }), _jsx("input", { type: "text", id: "customer_tel", name: "customer_tel", required: true, value: formData.customer_tel, onChange: changeData })] }), _jsxs("div", { className: "col-md-6", children: [_jsx("label", { htmlFor: "customer_postcode", children: "Postcode" }), _jsx("input", { type: "text", id: "customer_postcode", name: "customer_postcode", required: true, value: formData.customer_postcode, onChange: changeData })] }), _jsxs("div", { className: "col-md-12", children: [_jsx("label", { htmlFor: "customer_address", children: "Address" }), _jsx("input", { type: "text", id: "customer_address", name: "customer_address", required: true, value: formData.customer_address, onChange: changeData })] }), _jsx("div", { id: "form-checkbox-container", className: "col-md-12", children: _jsxs("label", { htmlFor: "consent_checkbox", children: [_jsx("input", { type: "checkbox", id: "consent_checkbox", name: "consent_checkbox", required: true }), "I agree to the terms and conditions."] }) }), _jsx("button", { id: "valuation-form-submit-btn", type: "submit", children: "Submit" })] }) }), _jsx("div", { id: "valuation-form-submit-success", children: "Booking successfully submitted. We will contact you as soon as possible." }), _jsx("div", { id: "valuation-form-submit-fail", children: "Booking error, please try again." })] }));
}
export default ValuationForm;
