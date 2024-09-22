import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "../styles/FullScreenCarousel.css"; // Custom CSS file

const FullScreenCarousel = ({ slides }) => {
  useEffect(() => {
    console.log(slides);
  });

  return (
    <MDBCarousel
      showControls
      showIndicators
      dark
      fade
      className="custom-carousel"
    >
      {slides.map((slide, index) => (
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={index + 1}
          src={slide.image}
          alt={slide.alt}
          key={index}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "90vh",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "blur(3px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                textAlign: "center",
              }}
            >
              <h3>{slide.label}</h3>
              <p>{slide.text}</p>
            </div>
          </div>
        </MDBCarouselItem>
      ))}
    </MDBCarousel>
  );
};

FullScreenCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FullScreenCarousel;
