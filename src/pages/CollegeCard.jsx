
import PropTypes from 'prop-types';

const CollegeCard = ({
  actualRating,
  ratingStar,
  clgName,
  clgLocation,
  Branch,
  twentyThreePercent,
  twentyTWOPercent,
  twentyONEPercent,
  feeAmount,
  jeeMains,
  clgImg,
}) => {
  const roundedRating = Math.round(actualRating);

  return (
    <div className="card">
      <div className="image-container">
        <div className="rating">
          <h3 className="actual-rating-2">{roundedRating}</h3>
          <h3 className="outof-5-2">/5</h3>
          <img
            loading="lazy"
            src={ratingStar}
            alt="clg-img"
            className="stars"
          />
        </div>
        <img
          sizes="(max-width: 479px) 303.9930725097656px, 325.0000305175781px"
          src={clgImg}
          loading="lazy"
          alt=""
          className="clg-img"
        />
        <div className="gradient"></div>
      </div>
      <div className="clgname-location-div">
        <h1 className="clg-name">{clgName}</h1>
        <div className="location-div flex felx-row space-y-1">
          <div className="flex space-x-5">
            <img
              className="mt-1"
              width="16"
              loading="lazy"
              src="https://uploads-ssl.webflow.com/64c4b66a44c38c5fa4309e5a/64c4dc45434d9807c614a578_Location%20pin.png"
              alt=""
            />
            <div className="clg-location-2 flex">{clgLocation}</div>
          </div>

          <div className="ranking-2">
            {/* <strong className="bold-text"># NIRF ranking 251 out of 300</strong> */}
          </div>
        </div>
      </div>
      <div className="clg-info-div">
        <h2 className="branch flex mr-auto my-4 font-semibold">{Branch}</h2>
        <div className="cutoff-div">
          <div className="mht-cet_cuttoff-2 cutoff">
            <div className="text cutoff font-pop font-bold text-xs p-2 text-center bg-yellowpri rounded-full">
              MHTCET- CUTOFF
            </div>
          </div>
          <div className="">
            <div className="_2023-2">2023 :</div>
            <div className="_2022-2">2022 :</div>
            <div className="_2021-2">2021 :</div>
          </div>
          <div className="mt-2 ">
            <div className="_2023-percentile-2">{twentyThreePercent + "%"}</div>
            <div className="_2022-percentile-2">{twentyTWOPercent + "%"}</div>
            <div className="_2021-percentile-2">{twentyONEPercent + "%"}</div>
          </div>
        </div>
        <div className="dividing-line-2"></div>
        <div className="rightsidefee-div">
          <div className="exams-accepted-2 accepted-exam">
            <div className="text-copy  font-pop font-bold text-xs p-2 text-center bg-yellowpri rounded-full">
              Exams Accepted
            </div>
            <div className="exams-img-logo">
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/64c4b66a44c38c5fa4309e5a/64d4a1b08ad982a9bdd7ae11_jee%20logo.png"
                alt="MHT-CET"
                className="jee"
              />
              <div className="jee_mains-2">{jeeMains}</div>
              <div className="line-2">|</div>
              <div className="cet-2">MHT-CET</div>
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/64c4b66a44c38c5fa4309e5a/64d49fbaa077b6c3c418f583_asdad.png"
                alt="MHT-CET"
                className="mhtcet"
              />
            </div>
            <div className="fee-div-2 fees">
              <div className="font-pop  text-xs p-2 text-center bg-yellowpri rounded-full">
                Yearly Fees <span className="text-span">(OPEN)</span>
              </div>
              <div className="actual-fig-2">
                <span className="actual-fees">{"₹" + feeAmount}</span>
                <span className="text-span-3"> (Approx)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CollegeCard.propTypes = {
  actualRating: PropTypes.number.isRequired,
  ratingStar: PropTypes.string.isRequired,
  clgName: PropTypes.string.isRequired,
  clgLocation: PropTypes.string.isRequired,
  Branch: PropTypes.string.isRequired,
  twentyThreePercent: PropTypes.string.isRequired,
  twentyTWOPercent: PropTypes.string.isRequired,
  twentyONEPercent: PropTypes.string.isRequired,
  feeAmount: PropTypes.string.isRequired,
  jeeMains: PropTypes.string.isRequired,
  clgImg: PropTypes.string.isRequired,
};

export default CollegeCard;
