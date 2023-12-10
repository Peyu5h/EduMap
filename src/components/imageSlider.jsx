import { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";


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
          <img src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/657615462b81353606a0b763_image1.png" alt="img1" />
        </div>
        <div className="cell  w-[64%] md:w-[38%]">
          <img src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/65761546b9d7afd78bb295a4_image2.png" alt="img2" />
        </div>

        <div className="cell">
          <img src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/65761552088f6cc99b6c64d7_image3.png" alt="img3" />
        </div>
        <div className="cell">
          <img src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/657615507f832e848a9599e1_image4.png" alt="img4" />
        </div>
        <div className="cell">
          <img src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/65761550e8028ceaade4711a_image5.png" alt="img5" />
        </div>
        <div className="cell">
          <img src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/65761545b89a7f7c0f793ad3_image6.png" alt="img5" />
        </div>
        <div className="cell">
          <img src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/657615450f4d487c49a6343c_image7.png" alt="img5" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
