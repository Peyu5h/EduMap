import { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import imag1 from "../assets/image1.png";
import imag2 from "../assets/image2.png";
import imag3 from "../assets/image3.png";
import imag4 from "../assets/image4.png";
import imag5 from "../assets/image5.png";
import imag6 from "../assets/image6.png";
import imag7 from "../assets/image7.png";

const Slider = () => {
  const flickityRef = useRef(null);

  useEffect(() => {
    let flkty;

    const initializeFlickity = () => {
      flkty = new Flickity(flickityRef.current, {
        cellAlign: "left",
        wrapAround: true,
        freeScroll: true,
      });
    };

    if (flickityRef.current) {
      initializeFlickity();
    }

    const handleResize = () => {
      if (flkty) {
        flkty.resize();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (flkty) {
        flkty.destroy();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="img-slider">
      <div className="main-carousel" ref={flickityRef}>
        <div className="cell w-[64%] md:w-[38%]">
          <img src={imag1} alt="img1" />
        </div>
        <div className="cell  w-[64%] md:w-[38%]">
          <img src={imag2} alt="img2" />
        </div>

        <div className="cell">
          <img src={imag3} alt="img3" />
        </div>
        <div className="cell">
          <img src={imag4} alt="img4" />
        </div>
        <div className="cell">
          <img src={imag5} alt="img5" />
        </div>
        <div className="cell">
          <img src={imag6} alt="img5" />
        </div>
        <div className="cell">
          <img src={imag7} alt="img5" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
