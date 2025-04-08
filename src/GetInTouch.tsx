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
    } catch (err) {
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
        const successMessage = document.getElementById(
          "email-list-submit-success"
        );
        const failMessage = document.getElementById("email-list-submit-fail");
        // Reset both message div
        failMessage.style.display = "none";
        successMessage.style.display = "none";
        if (!response.ok) {
          failMessage.style.display = "block";
          throw new Error("Network response was not ok");
        } else {
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

  return (
    <>
      <div className="email-list-form-container" id="email-list-form-container">
        <div className="email-list-form-content">
          <span id="closeModalButton" className="close-btn">
            &times;
          </span>
          <h1>Join Our Email List</h1>
          <span>Don't miss out any new property on the market.</span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="customer_email"
              name="customer_email"
              placeholder="Enter your email"
              onChange={changeData}
              value={emailData.customer_email}
            ></input>
            <button className="email-sign-up-button" type="submit">
              Sign Up
            </button>
          </form>
          <div id="email-list-submit-success">
            Email successfully registered.
          </div>
          <div id="email-list-submit-fail">
            Email registered/ Invalid email.
          </div>
        </div>
      </div>
    </>
  );
}

export default GetInTouch;

//https://medium.com/@francesco.saviano87/how-to-build-a-newsletter-signup-modal-popup-using-html-css-and-javascript-828447b7d163
