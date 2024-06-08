// FullScreenCarousel.js
import React from 'react';
import PropTypes from 'prop-types';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import '../styles/FullScreenCarousel.css';

const FullScreenCarousel = ({ slides }) => {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      {slides.map((slide, index) => (
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={index + 1}
          src={slide.image}
          alt={slide.alt}
          key={index}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover"
            }}
          />
          <div className="carousel-caption">
            <h5>{slide.label}</h5>
            <p>{slide.text}</p>
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
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FullScreenCarousel;
