import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "./GetInTouch.css";
import { popUp } from "./js/popUp";
function GetInTouch() {
    const [emailData, setEmailData] = useState({ customer_email: "" });
    const changeData = (event) => {
        try {
            const { name, value } = event.target;
            setEmailData((prevData) => ({ ...prevData, [name]: value }));
            console.log(name, value);
        }
        catch (err) {
            console.log(err);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.customer_email.value);
        const data = emailData;
        fetch("https://apex.oracle.com/pls/apex/boyce/emaillist/submitemail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
            const successMessage = document.getElementById("email-list-submit-success");
            const failMessage = document.getElementById("email-list-submit-fail");
            // Reset both message div
            failMessage.style.display = "none";
            successMessage.style.display = "none";
            if (!response.ok) {
                failMessage.style.display = "block";
                throw new Error("Network response was not ok");
            }
            else {
                console.log("success");
                console.log(response.status);
                // Check if exists
                if (successMessage) {
                    successMessage.style.display = "block";
                }
                return data;
            }
        })
            .then((data) => {
            console.log("Success:", data); // Handle success response
        })
            .catch((error) => {
            console.error("Error:", error); // Handle error response
        });
    };
    useEffect(() => {
        popUp();
    }, []);
    return (_jsx(_Fragment, { children: _jsx("div", { className: "email-list-form-container", id: "email-list-form-container", children: _jsxs("div", { className: "email-list-form-content", children: [_jsx("span", { id: "closeModalButton", className: "close-btn", children: "\u00D7" }), _jsx("h1", { children: "Join Our Email List" }), _jsx("span", { children: "Don't miss out any new property on the market." }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "text", id: "customer_email", name: "customer_email", placeholder: "Enter your email", onChange: changeData, value: emailData.customer_email }), _jsx("button", { className: "email-sign-up-button", type: "submit", children: "Sign Up" })] }), _jsx("div", { id: "email-list-submit-success", children: "Email successfully registered." }), _jsx("div", { id: "email-list-submit-fail", children: "Email registered/ Invalid email." })] }) }) }));
}
export default GetInTouch;
