import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./EnquiryForm.css";
function EnquiryForm() {
    const [formData, setformData] = useState({
        customer_name: "",
        customer_tel: "",
        customer_email: "",
    });
    const changeData = (event) => {
        try {
            const { name, value } = event.target;
            setformData((prevData) => ({ ...prevData, [name]: value }));
        }
        catch (err) {
            console.log(err);
        }
    };
    // Just for logging formData and prevents default form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        const data = formData;
        fetch("https://apex.oracle.com/pls/apex/boyce/EnquiryForm/submission", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            else {
                console.log("success");
                const successMessage = document.getElementById("enquiry-submit-success");
                successMessage.style.display = "block";
                // Check if exists
                if (successMessage) {
                    successMessage.style.display = "block";
                }
            }
            return data;
        })
            .then((data) => {
            console.log("Success:", data); // Handle success response
        })
            .catch((error) => {
            console.error("Error:", error); // Handle error response
        });
    };
    return (_jsxs("div", { className: "enquiry-form-container", children: [_jsx("div", { className: "enquiry-form-header", children: _jsx("h2", { children: "Enquiry" }) }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "enquiry-form-entry-container", children: [_jsx("label", { htmlFor: "customer_name", children: "Name:" }), _jsx("input", { type: "text", id: "customer_name", name: "customer_name", required: true, value: formData.customer_name, onChange: changeData })] }), _jsxs("div", { className: "enquiry-form-entry-container", children: [_jsx("label", { htmlFor: "customer_tel", children: "Telephone:" }), _jsx("input", { type: "number", id: "customer_tel", name: "customer_tel", required: true, value: formData.customer_tel, onChange: changeData })] }), _jsxs("div", { className: "enquiry-form-entry-container", children: [_jsx("label", { htmlFor: "customer_email", children: "Email:" }), _jsx("input", { type: "text", id: "customer_email", name: "customer_email", required: true, value: formData.customer_email, onChange: changeData })] }), _jsx("button", { id: "enquiry-form-submit-btn", type: "submit", children: "Submit" }), _jsx("div", { id: "enquiry-submit-success", children: "Thank you for getting in touch with us. We will respond to you as soon as possible." })] })] }));
}
export default EnquiryForm;
