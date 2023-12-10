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
              src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/65761583fbe373f3fcad2d79_Accenture-logo-768x432.png"
              alt="logo"
            />
          </div>
          <div className="slide">
            <img
              className="center-img"
              src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/657615845a9caf7190c86aed_CAP.PA_BIG.png"
              alt="logo"
            />
          </div>

          <div className="slide">
            <img
              className="center-img"
              src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/65761584c6eb715cea594702_infosys.png"
              alt="logo"
            />
          </div>
          <div className="slide">
            <img
              className="center-img"
              src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/65761584352fe47f7e0436e2_microsoft-logo-png-transparent-background-1-p-2000.png"
              alt="logo"
            />
          </div>
          <div className="slide">
            <img
              className="center-img"
              src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/65761583e4439f3378c62c42_Oracle-Log.png"
              alt="logo"
            />
          </div>
          <div className="slide">
            <img
              className="center-img"
              src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/65761584f909b41b79512999_TCS.NS.png"
              alt="logo"
            />
          </div>
          <div className="slide">
            <img
              className="center-img"
              src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/65761584bda3e23aaf31c69b_Tech_Mahindra-Logo.wine-p-1600.png"
              alt="logo"
            />
          </div>

          <div className="slide">
            <img
              className="center-img"
              src="shttps://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/6576158429004f081100a870_woodland-gardening-amazon-png-logo-vector-8.png"
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
