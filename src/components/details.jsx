import clgLogo from "../assets/clg-logo.png";
import locationPin from "../assets/locationPin.png";
import mdiPin from "../assets/mdi_pin.png";
import verified from "../assets/verified.png";
import privatePublic from "../assets/privatePublic.png";

const Details = () => {
  return (
    <div>
      {/* collegeinfo */}

      <div className="flex mt-[5rem] flex-col mx-auto bg-overlay2 shadow-xl p-3 w-full md:w-[60%] rounded-lg">
        {/* name+logo part */}
        <div className="flex p-2 ">
          <img
            src={clgLogo}
            className=" rounded-lg ml-2 h-auto w-16 md:w-20 "
            alt="clg-logo"
          />
          <div className="bruh">
            <h1 className="text-white font-semibold text-xl sm:text-2xl overflow-hidden ml-3">
              Atharva College of Engineering{" "}
            </h1>

            <div className="flex hidden md:flex mt-2 md:flex-row ml-1 p-2 font-semibold font-pop text-sub text-sm">
              <div className="upper flex md:flex-row items-center">
                <img src={locationPin} alt="location-pin" className="mr-2" />
                <h4 className="mb-0">Malad, Mumbai</h4>
                <div className="divider mx-2 w-[2px] h-4 bg-sub"></div>
                <img src={privatePublic} alt="location-pin" className="mr-2" />
                <h4 className="mb-0">Private College</h4>
                <div className="flex divider mx-2 w-[2px] h-4 bg-sub"></div>
              </div>

              <div className="lower flex md:flex-row mt-3 md:mt-0 items-center">
                <img src={verified} alt="location-pin" className="mr-2" />
                <h4 className="mb-0">AICTE Approved</h4>
                <div className="divider mx-2 w-[2px] h-4 bg-sub"></div>
                <img src={mdiPin} alt="location-pin" className="mr-2" />
                <h4 className="mb-0">Est. 1992</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-2 md:hidden ml-3 p-2 font-semibold font-pop text-sub text-sm">
          <div className="upper flex md:flex-row items-center">
            <img src={locationPin} alt="location-pin" className="mr-2" />
            <h4 className="mb-0">Malad, Mumbai</h4>
            <div className="divider mx-2 w-[2px] h-4 bg-sub"></div>
            <img src={privatePublic} alt="location-pin" className="mr-2" />
            <h4 className="mb-0">Private College</h4>
            <div className="hidden md:flex divider mx-2 w-[2px] h-4 bg-sub"></div>
          </div>

          <div className="lower flex md:flex-row mt-3 md:mt-0 items-center">
            <img src={verified} alt="location-pin" className="mr-2" />
            <h4 className="mb-0">AICTE Approved</h4>
            <div className="divider mx-2 w-[2px] h-4 bg-sub"></div>
            <img src={mdiPin} alt="location-pin" className="mr-2" />
            <h4 className="mb-0">Est. 1992</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
