import Navbar from "../components/navbar";
import Slider from "../components/imageSlider";
import ReviewSlider from "../components/review";
import Cutoff from "../components/cutoff";
import About from "../components/about";
import Placement from "../components/placement";
import Contact from "../components/contact";
import Details from "../components/details";

const AtharvaCollege = () => {
  return (
    <div className="overflow-hidden">
      <section id="default">
        <Navbar />
        <Details />

        {/* Image Galllery */}
        <div className="img-slider mt-12 rounded-lg">
          <Slider />
        </div>
      </section>

      <section className="mt-24 xs:mx-4 sm:mx-0" id="about">
        <About />
      </section>

      <section className="my-24" id="review">
        <ReviewSlider />
      </section>

      <section className="mt-24 " id="cutoff"></section>

      <section className="mt-48 xs:mx-4 sm:mx-0" id="cutoff">
        <Cutoff />
      </section>

      <section className="mt-48 xs:mx-4 sm:mx-0" id="placement">
        <Placement />
      </section>

      <section className="mt-48 xs:mx-4 sm:mx-0" id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default AtharvaCollege;
