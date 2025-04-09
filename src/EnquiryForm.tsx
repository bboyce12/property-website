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
    } catch (err) {
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
        } else {
          console.log("success");
          const successMessage = document.getElementById(
            "enquiry-submit-success"
          );
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
  return (
    <div className="enquiry-form-container">
      <div className="enquiry-form-header">
        <h2>Enquiry</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="enquiry-form-entry-container">
          <label htmlFor="customer_name">Name:</label>
          <input
            type="text"
            id="customer_name"
            name="customer_name"
            required
            value={formData.customer_name}
            onChange={changeData}
          />
        </div>
        <div className="enquiry-form-entry-container">
          <label htmlFor="customer_tel">Telephone:</label>
          <input
            type="number"
            id="customer_tel"
            name="customer_tel"
            required
            value={formData.customer_tel}
            onChange={changeData}
          />
        </div>
        <div className="enquiry-form-entry-container">
          <label htmlFor="customer_email">Email:</label>
          <input
            type="text"
            id="customer_email"
            name="customer_email"
            required
            value={formData.customer_email}
            onChange={changeData}
          />
        </div>
        <button id="enquiry-form-submit-btn" type="submit">
          Submit
        </button>
        <div id="enquiry-submit-success">
          Thank you for getting in touch with us. We will respond to you as soon
          as possible.
        </div>
      </form>
    </div>
  );
}

export default EnquiryForm;
