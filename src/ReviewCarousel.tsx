import React from "react";
import "./ReviewCarousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import google5StarReview from "./assets/google-5star-review.webp";

function ReviewCarousel() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide fade-in-container"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <div className="carousel-review-card-background">
              <div className="carousel-review-card-content">
                <img src={google5StarReview} alt="" />
                <h3>
                  I recently used their service. It was a excellent experience.
                  Thank you.
                </h3>
                <h5>Kate Arthus</h5>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="carousel-review-card-background">
              <div className="carousel-review-card-content">
                <img src={google5StarReview} alt="" />
                <h3>
                  I love how easy it was to compare different properties side by
                  side. The neighborhood insights were particularly useful. Will
                  definitely use this site again!
                </h3>
                <h5>David W.</h5>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="carousel-review-card-background">
              <div className="carousel-review-card-content">
                <img src={google5StarReview} alt="" />
                <h3>
                  Great selection of properties! The detailed descriptions and
                  high-quality photos really helped me visualize my future home.
                  A few more virtual tours would be a plus!
                </h3>
                <h5>Sarah L.</h5>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default ReviewCarousel;
