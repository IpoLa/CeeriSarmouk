import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "../styles/FullScreenCarousel.css"; // Custom CSS file
import { ImagesSlider } from "./ImagesSlider";

const FullScreenCarousel = ({ slides }) => {
  useEffect(() => {
    console.log(slides);
  });

  return (
    <ImagesSlider className="h-[40rem]" images={slides}>
      {/* <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div> */}
    </ImagesSlider>
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
