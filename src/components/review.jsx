import { useState } from "react";
import fourStar from "../assets/stars/4-STAR.png";
import fiveStar from "../assets/stars/5-STAR.png";
// import threeStar from "../assets/stars/4-STAR.png";
// import twoStar from "../assets/stars/4-STAR.png";
// import oneStar from "../assets/stars/4-STAR.png";
import googleReview from "../assets/stars/google_review.png";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const ReviewSlider = () => {
  const slideHeight = 246;
  const totalSlides = 3;
  const maxSlidePosition = -(slideHeight * (totalSlides - 1));

  const [slidePosition, setSlidePosition] = useState(0);

  const handleUpArrowClick = () => {
    if (slidePosition < 0) {
      setSlidePosition(slidePosition + slideHeight);
    }
  };

  const handleDownArrowClick = () => {
    if (slidePosition > maxSlidePosition) {
      setSlidePosition(slidePosition - slideHeight);
    }
  };

  return (
    <div>
      <div className="Reviews flex flex-col items-start text-3xl font-semibold my-24">
        <div className="font-pop text-white mx-auto ">Student Reviews</div>
        <div className="h-[2px] w-56 mx-auto  bg-yellowpri mt-2"></div>
      </div>

      <div className="review-box mt-48 relative w-[80%] max-w-[700px] overflow-hidden h-[246px] rounded-lg bg-overlay2 mx-auto shadow-lg">
        <div
          style={{ top: `${slidePosition}px` }}
          className="slider w-full pr-[60px] box-border absolute top-0 left-0"
        >
          <div
            id="slide"
            className="slider w-full pr-[60px] box-border absolute top-0 left-0"
          >
            <div className="sliding-card shadow-xl p-8">
              {/* Upper Content */}
              <div className="flex justify-between items-center ">
                <div className="left flex items-center space-x-4">
                  <div className="left-left">
                    <img
                      className="rounded-full"
                      src="https://lh3.googleusercontent.com/a-/ALV-UjVX7kGwdqelnKWMP6P6aNKLEDWCG13BaxHww12PeinnO2E=w45-h45-p-rp-mo-br100"
                      alt="dp"
                    />
                  </div>
                  <div className="left-right">
                    <h2 className="text-md font-pop font-semibold text-white">
                      Pranav Patil
                    </h2>
                    <img className="w-[5rem]" src={fourStar} alt="review" />
                  </div>
                </div>

                <div className="right flex items-center w-[5rem] md:w-[6rem]">
                  <img src={googleReview} alt="" />
                </div>
              </div>

              {/* Botton review */}
              <div className="actual-review mt-4">
                <p className="text-sm font-pop text-sub over">
                  It’s been an amazing experience being a part of Atharva
                  College of Engineering for the past 3 years. The environment
                  here is quite chill and an enthusiastic one. It encourages one
                  to achieve one’s full potential. Here the faculties don’t just
                  focus on our academic development but on our overall
                  development including social skills by encouraging us to take
                  part in various extracurricular activities and committees.
                </p>
              </div>
            </div>

            {/* Review-card @2 */}
            <div className="sliding-card shadow-xl p-8">
              {/* Upper Content */}
              <div className="flex justify-between items-center ">
                <div className="left flex items-center space-x-4">
                  <div className="left-left">
                    <img
                      className="rounded-full"
                      src="https://lh3.googleusercontent.com/a-/ALV-UjXxOQfoY9pmec0gLC0GFP0ZHMWSinfKcsglFCE3m_JeCjE=w45-h45-p-rp-mo-br100"
                      alt="dp"
                    />
                  </div>
                  <div className="left-right">
                    <h2 className="text-md font-pop font-semibold text-white">
                      Prathamesh Dalvi
                    </h2>
                    <img className="w-[5rem]" src={fiveStar} alt="review" />
                  </div>
                </div>

                <div className="right flex items-center w-[5rem] md:w-[6rem]">
                  <img src={googleReview} alt="" />
                </div>
              </div>

              {/* Botton review */}
              <div className="actual-review mt-4">
                <p className="text-sm font-pop text-sub over">
                  Being a part of Atharva College of Engineering for the past
                  three years has been an incredible experience. This place has
                  a relaxed and positive atmosphere. It motivates people to
                  reach their best potential. Here, the faculties encourage us
                  to participate in a variety of extracurricular activities and
                  committees in order to promote not only our academic
                  development but also our overall development, which includes
                  the development of our social skills.
                </p>
              </div>
            </div>
            <div className="sliding-card shadow-xl p-8">
              {/* Upper Content */}
              <div className="flex justify-between items-center ">
                <div className="left flex items-center space-x-4">
                  <div className="left-left">
                    <img
                      className="rounded-full"
                      src="https://lh3.googleusercontent.com/a-/ALV-UjXXLyOj_h6maQdUwKO8UJeJTlKY0BZ3oEbgQkRm7wkX4oyM=w45-h45-p-rp-mo-br100"
                      alt="dp"
                    />
                  </div>
                  <div className="left-right">
                    <h2 className="text-md font-pop font-semibold text-white">
                      Rohini Joglekar
                    </h2>
                    <img className="w-[5rem]" src={fiveStar} alt="review" />
                  </div>
                </div>

                <div className="right flex items-center w-[5rem] md:w-[6rem]">
                  <img src={googleReview} alt="" />
                </div>
              </div>

              {/* Botton review */}
              <div className="actual-review mt-4">
                <p className="text-sm font-pop text-sub over">
                  I am glad to provide you with my feedback about the college.
                  My overall experience to date has been amazing, and the
                  college is having an amazing infrastructure. Your college has
                  provided me with a number of opportunities to grow and explore
                  my skills. I have always found a positive and healthy
                  environment and the teachers are highly supportive.Its one of
                  the finest engineering colleges in Mumbai with a lot of
                  emphasis laid on research, technology and innovation.
                </p>
              </div>
            </div>

            {/* Review-card @3 */}

            <div className="sliding-card shadow-xl p-8">
              {/* Upper Content */}
              <div className="flex justify-between items-center ">
                <div className="left flex items-center space-x-4">
                  <div className="left-left">
                    <img
                      className="rounded-full"
                      src="https://lh3.googleusercontent.com/a-/ALV-UjVX7kGwdqelnKWMP6P6aNKLEDWCG13BaxHww12PeinnO2E=w45-h45-p-rp-mo-br100"
                      alt="dp"
                    />
                  </div>
                  <div className="left-right">
                    <h2 className="text-md font-pop font-semibold text-white">
                      Pranav Patil
                    </h2>
                    <img className="w-[5rem]" src={fourStar} alt="review" />
                  </div>
                </div>

                <div className="right flex items-center w-[5rem] md:w-[6rem]">
                  <img src={googleReview} alt="" />
                </div>
              </div>

              {/* Botton review */}
              <div className="actual-review mt-4">
                <p className="text-sm font-pop text-sub over">
                  It’s been an amazing experience being a part of Atharva
                  College of Engineering for the past 3 years. The environment
                  here is quite chill and an enthusiastic one. It encourages one
                  to achieve one’s full potential. Here the faculties don’t just
                  focus on our academic development but on our overall
                  development including social skills by encouraging us to take
                  part in various extracurricular activities and committees.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center slide-bar w-[60px] h-full py-[16px] bg-overlay3 absolute right-0 top-0 box-border">
          <div className="cursor-pointer" onClick={handleUpArrowClick}>
            <ArrowCircleUpIcon
              sx={{ color: "#F1AE2D", width: "48px", height: "48px" }}
            />
          </div>
          <div className="cursor-pointer" onClick={handleDownArrowClick}>
            <ArrowCircleDownIcon
              sx={{ color: "#F1AE2D", width: "48px", height: "48px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
