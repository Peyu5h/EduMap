import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import $ from "jquery";
import "slick-carousel";

class Recruiters extends Component {
  componentDidMount() {
    $(document).ready(() => {
      $(".customer-logos").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      });
    });
  }

  render() {
    return (
      <div className="container">
        <section className="customer-logos slider">
          <div className="slide">
            <img
              className="center-img"
              src="src\assets\CompanyLogo\Accenture-logo-768x432.png"
              alt="logo"
            />
          </div>
          <div className="slide">
            <img
              className="center-img"
              src="src\assets\CompanyLogo\CAP.PA_BIG.png"
              alt="logo"
            />
          </div>

          <div className="slide">
            <img
              className="center-img"
              src="src\assets\CompanyLogo\infosys.png"
              alt="logo"
            />
          </div>
          <div className="slide">
            <img
              className="center-img"
              src="src\assets\CompanyLogo\microsoft-logo-png-transparent-background-1.png"
              alt="logo"
            />
          </div>
          <div className="slide">
            <img
              className="center-img"
              src="src\assets\CompanyLogo\Oracle-Log.png"
              alt="logo"
            />
          </div>
          <div className="slide">
            <img
              className="center-img"
              src="src\assets\CompanyLogo\TCS.NS.png"
              alt="logo"
            />
          </div>
          <div className="slide">
            <img
              className="center-img"
              src="src\assets\CompanyLogo\Tech_Mahindra-Logo.wine.png"
              alt="logo"
            />
          </div>

          <div className="slide">
            <img
              className="center-img"
              src="src\assets\CompanyLogo\woodland-gardening-amazon-png-logo-vector-8.png"
              alt="logo"
            />
          </div>
          {/* Add more slide items here */}
        </section>
      </div>
    );
  }
}

export default Recruiters;
