import { useState } from "react";
import logo from "../assets/logo.png";
import "../App.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbar relative  my-0 ">
        <div className="flex items-start justify-between mx-auto space-x-20 my-3">
          <a href="/" className="">
            <img src={logo} alt="logo" className="w-36" />
          </a>
          <div className="hidden items-center space-x-10 uppercase text-white md:flex">
            <div className="about group ">
              <a
                href="#about"
                className="text-gray-300 font-pop group-hover:text-white transition-all"
              >
                About
              </a>
              <div className="h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
            </div>

            <div className="review group ">
              <a
                href="#review"
                className="text-gray-300 font-pop group-hover:text-white transition-all"
              >
                Review
              </a>
              <div className="h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
            </div>

            <div className="cutoff group ">
              <a
                href="#cutoff"
                className="text-gray-300 font-pop group-hover:text-white transition-all"
              >
                Cutoff
              </a>
              <div className="h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
            </div>

            <div className="about group ">
              <a
                href="#placement"
                className="text-gray-300 font-pop group-hover:text-white transition-all"
              >
                Placement
              </a>
              <div className="h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
            </div>

            <div className="contact group ">
              <a
                href="#contact"
                className="text-gray-300 font-pop group-hover:text-white transition-all"
              >
                Contact
              </a>
              <div className="h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-white"></div>
            </div>
          </div>
          <button
            onClick={toggleMenu}
            className={`block hamburger md:hidden focus:outline-none ${
              isMenuOpen ? "open" : ""
            }`}
            type="button"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div
          className={`absolute ${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden p-6 rounded-lg bg-overlay3 left-0 right-0 top-20 z-100`}
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <a
              href="#about"
              className="w-full text-center pb-1 border-sub border-b-[1px] pt-2  rounded-xl"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              href="#review"
              className="w-full text-center pb-1 border-sub border-b-[1px] pt-2  rounded-xl"
              onClick={closeMenu}
            >
              Review
            </a>
            <a
              href="#intake"
              className="w-full text-center pb-1 border-sub border-b-[1px] pt-2  rounded-xl"
              onClick={closeMenu}
            >
              Intake
            </a>
            <a
              href="#cutoff"
              className="w-full text-center pb-1 border-sub border-b-[1px] pt-2  rounded-xl"
              onClick={closeMenu}
            >
              Cutoff
            </a>
            <a
              href="#placement"
              className="w-full text-center pb-1 border-sub border-b-[1px] pt-2  rounded-xl"
              onClick={closeMenu}
            >
              Placement
            </a>
            <a
              href="#contact"
              className="w-full text-center pb-1 border-sub border-b-[1px] pt-2  rounded-xl"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div
        id="menu"
        className={`absolute ${
          isMenuOpen ? "flex" : "hidden"
        } p-6 rounded-lg bg-overlay3 left-[-999px] right-99 top-20 z-100`}
      ></div>
    </div>
  );
};

export default Navbar;
