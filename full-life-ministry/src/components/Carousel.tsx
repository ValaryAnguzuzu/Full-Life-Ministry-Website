import React from "react";

const Carousel: React.FC = () => (
  <div id="churchCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="/path/to/image1.jpg"
          className="d-block w-100"
          alt="Event 1"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Welcome to Full Life Ministry</h5>
          <p>Join us for worship and fellowship.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="/path/to/image2.jpg"
          className="d-block w-100"
          alt="Event 2"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Weekly Events</h5>
          <p>Discover our weekly activities.</p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#churchCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#churchCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

export default Carousel;
