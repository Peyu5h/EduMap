import { useState, useEffect } from "react";
import CollegeCard from "./CollegeCard";

import BranchBtns from "../components/branchBtn";
import RangeSlider from "../components/RangeSlider";
import { Link } from "react-router-dom";

// import listColleges from "./CollegeData.json";  //College JSON data

const branchStates = [
  { id: 1, text: "All" },
  { id: 2, text: "All" },
  { id: 3, text: "Computer Engineering" },
  { id: 4, text: "Information Technology" },
  { id: 5, text: "EXTC Engineering" },
  { id: 6, text: "Civil Engineering" },
  { id: 7, text: "AI/DS" },
  { id: 8, text: "ECS Engineering" },
  { id: 9, text: "Chem" },
  { id: 10, text: "AI/ML" },
  { id: 11, text: "Mechanical" },
  { id: 12, text: "Robotics" },
];

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(0); // Initialize with "All"
  const [sortedColleges, setSortedColleges] = useState([]);
  const [initialColleges, setInitialColleges] = useState([]);

  //-----------ADDITIONAL FEATURES-------------//
  const [isGovFilter, setIsGovFilter] = useState(false);
  const [isAutonomousFilter, setIsAutonomousFilter] = useState(false);
  const [isAidedFilter, setIsAidedFilter] = useState(false);
  const [isNonMinorityFilter, setIsNonMinorityFilter] = useState(false);

  //-----------Rangeslider------------//
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(100);

  const handleMinChange = (newMinRange) => {
    setMinRange(newMinRange);
  };

  const handleMaxChange = (newMaxRange) => {
    setMaxRange(newMaxRange);
  };

  //-----------Total Colleges------------//

  const totalColleges = sortedColleges.length;
  // ================================================================================ //

  useEffect(() => {
    // Fetch the data from the URL
    fetch("../collegeData.json")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the JSON structure matches your data
        if (data && data.initialColleges) {
          setInitialColleges(data.initialColleges);
          // You may also want to set sortedColleges here based on your initial sorting preference
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    // Filter and sort the initialColleges based on the searchInput and selectedBranch
    const filteredColleges = initialColleges.filter((college) => {
      const collegePercent = parseFloat(college.twentyThreePercent); // 2023 percentile for rangeSlider
      return (
        college.clgName.toLowerCase().includes(searchInput.toLowerCase()) &&
        (selectedBranch === 0 ||
          college.Branch === branchStates[selectedBranch - 1].text) &&
        // Additional Features
        (!isGovFilter || college.isGov) &&
        (!isAutonomousFilter || college.isAutonomous) &&
        (!isAidedFilter || college.isAided) &&
        (!isNonMinorityFilter || college.isNonminority) &&
        collegePercent >= minRange &&
        collegePercent <= maxRange
      );
    });

    // Sort the filtered colleges by clgName (A-Z) [Default]
    const sortedFilteredColleges = [...filteredColleges].sort((a, b) => {
      return a.clgName.localeCompare(b.clgName);
    });

    setSortedColleges(sortedFilteredColleges);
  }, [
    searchInput,
    selectedBranch,
    isGovFilter,
    isAutonomousFilter,
    isAidedFilter,
    isNonMinorityFilter,
    minRange,
    maxRange,
    initialColleges, // Include 'initialColleges' as a dependency here
  ]);

  // ================================================================================ //

  //----------------------------Drop Down Sorting-------------------------------//

  const [isDropdownVisible, setIsDropdownVisible] = useState(false); //To hide/unhide
  const [selectedSortOption, setSelectedSortOption] = useState("Sort By"); //To change name of the field

  const handleSortOptionClick = (option) => {
    setSelectedSortOption(option);
    setIsDropdownVisible(false);

    // Clone the current sortedColleges array
    const sortedFilteredColleges = [...sortedColleges];

    if (option === "Name(A-Z)") {
      // Sort by clgName in ascending order (A-Z)
      sortedFilteredColleges.sort((a, b) => a.clgName.localeCompare(b.clgName));
    } else if (option === "Name(Z-A)") {
      // Sort by clgName in descending order (Z-A)
      sortedFilteredColleges.sort((a, b) => b.clgName.localeCompare(a.clgName));
    } else if (option === "Rating(High-Low)") {
      // Sort by actualRating in descending order (highest to lowest)
      sortedFilteredColleges.sort((a, b) => b.actualRating - a.actualRating);
    } else if (option === "Est.(Low-High)") {
      // Sort by est in ascending order (oldest to newest)
      sortedFilteredColleges.sort((a, b) => a.est - b.est);
      // Sort by feeAmount in ascending order (least to highest)
    } else if (option === "Fees(Low-High)") {
      sortedFilteredColleges.sort(
        (a, b) =>
          parseInt(a.feeAmount.replace(/,/g, "")) -
          parseInt(b.feeAmount.replace(/,/g, ""))
      );
    }

    // Update the sortedColleges state with the sorted array
    setSortedColleges(sortedFilteredColleges);
  };

  //----------------------------------RESET ALL----------------------------------------//
  const handleResetAll = () => {
    setSearchInput("");
    setSelectedBranch(0);
    setIsGovFilter(false);
    setIsAutonomousFilter(false);
    setIsAidedFilter(false);
    setIsNonMinorityFilter(false);
    setSortedColleges(initialColleges);
  };

  //DropDown hidden/visible
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  //handlers for the radio buttons
  const handleGovFilterChange = () => {
    setIsGovFilter(true);
    setIsAutonomousFilter(false);
    setIsAidedFilter(false);
    setIsNonMinorityFilter(false);
  };

  const handleAutonomousFilterChange = () => {
    setIsGovFilter(false);
    setIsAutonomousFilter(true);
    setIsAidedFilter(false);
    setIsNonMinorityFilter(false);
  };

  const handleAidedFilterChange = () => {
    setIsGovFilter(false);
    setIsAutonomousFilter(false);
    setIsAidedFilter(true);
    setIsNonMinorityFilter(false);
  };

  const handleNonMinorityFilterChange = () => {
    setIsGovFilter(false);
    setIsAutonomousFilter(false);
    setIsAidedFilter(false);
    setIsNonMinorityFilter(true);
  };

  //=====================================================================================//

  return (
    <div>
      
      <div className="bg-darkbg min-h-screen lg:w-screen w-full sm:mx-4 md:mx-0 xss:p-8  overflow-auto ">
        <div className="global-container lg:flex lg:flex-row md:flex-col space-y-8 lg:space-y-0 w-full gap-8 mt-4 ">
          {/* ----------Filter Section------------- */}
          <div className="filter-section mx-5 mb-5 sm:mx-0 p-4 h-[64rem] xs:h-[56rem] lg:h-[74rem] lgg:h-[66rem] md:h-[50rem] xl:h-[55rem]  bg-overlay2 rounded-xl lg:w-1/4">
            {/* search-bar */}
            <div className="search-bar flex">
              <div className=" left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white/25"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                className="p-3 w-full placeholder:text/25 place-whiteholder:font-extralight font-normal text-white/50 bg-transparent border-none rounded-full focus:outline-none caret-slate-300 selection:text-white selection:bg-overlay3 "
                type="text"
                placeholder="Enter Name of College..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            {/* -------------------------------------------------------------------------------------------- */}
            <div className="divide w-full h-[0.5px] my-2 bg-overlay3"></div>
            {/* -------------------------------------------------------------------------------------------- */}
            <div className="reset-container flex justify-between">
              <div className="h2 text-white/25 font-normal font-pop p-3 ">
                Showing <span>{totalColleges}</span> Colleges
              </div>
              <a
                href="#"
                className="reset p-3 text-white/40 font-extralight font-pop underline underline-offset-[0.4rem]"
                onClick={handleResetAll}
              >
                Reset all
              </a>
            </div>

            {/* -------------------------------------------------------------------------------------------- */}
            <div className="divide w-full h-[0.5px] my-2 bg-overlay3"></div>
            {/* -------------------------------------------------------------------------------------------- */}

            <div className="branch flex flex-col space-y-3">
              <h2 className="flex font-pop mt-4 text-heading">Branch</h2>
              <BranchBtns onBranchFilter={setSelectedBranch} />
            </div>

            {/* -------------------------------------------------------------------------------------------- */}
            <div className="divide w-full h-[0.5px] mt-6 mb-2 bg-overlay3"></div>
            {/* -------------------------------------------------------------------------------------------- */}
            <div className="sliders">
              <div className="mhtcet-slider">
                <div className="branch flex flex-col space-y-3 ">
                  <h2 className="flex font-pop mt-4 text-heading">MHT-CET </h2>
                  <RangeSlider
                    minRange={minRange}
                    maxRange={maxRange}
                    onMinChange={handleMinChange}
                    onMaxChange={handleMaxChange}
                  />
                </div>
              </div>
            </div>
            {/* -------------------------------------------------------------------------------------------- */}
            <div className="divide w-full h-[0.5px] mt-6 mb-2 bg-overlay3"></div>
            {/* -------------------------------------------------------------------------------------------- */}

            <div className="branch flex flex-col space-y-3">
              <h2 className="flex font-pop mt-4 text-heading">
                Additional Filters
              </h2>
              <ul className="w-48 text-sm font-medium">
                <li className="w-full">
                  <div className="flex items-center pl-1">
                    <input
                      type="radio"
                      checked={isGovFilter}
                      onChange={handleGovFilterChange}
                      className="w-4 h-4 text-yellowpri cursor-pointer"
                    />
                    <label className="w-full py-3 ml-2 text-md font-pop text-white/50">
                      Gov. College Only
                    </label>
                  </div>
                </li>
                <li className="w-full">
                  <div className="flex items-center pl-1">
                    <input
                      type="radio"
                      checked={isAutonomousFilter}
                      onChange={handleAutonomousFilterChange}
                      className="w-4 h-4 text-yellowpri cursor-pointer"
                    />
                    <label className="w-full py-3 ml-2 text-md font-pop text-white/50">
                      Autonomous Only
                    </label>
                  </div>
                </li>
                <li className="w-full">
                  <div className="flex items-center pl-1">
                    <input
                      type="radio"
                      checked={isAidedFilter}
                      onChange={handleAidedFilterChange}
                      className="w-4 h-4 text-yellowpri cursor-pointer"
                    />
                    <label className="w-full py-3 ml-2 text-md font-pop text-white/50">
                      Aided Colleges
                    </label>
                  </div>
                </li>
                <li className="w-full">
                  <div className="flex items-center pl-1">
                    <input
                      type="radio"
                      checked={isNonMinorityFilter}
                      onChange={handleNonMinorityFilterChange}
                      className="w-4 h-4 text-yellowpri cursor-pointer"
                    />
                    <label className="w-full py-3 ml-2 text-md font-pop text-white/50">
                      Non-minority Colleges
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*-------- End of filter Section------- */}

          {/* -------------Sort By-------------- */}
          <div className="right-container lg:mr-10 p-4 h-[5rem] bg-overlay2 rounded-xl m-5 sm:mx-0 lg:w-3/4">
            <div className="flex sort-by justify-end">
              <div className="drop-down-box">
                <button
                  id="dropdownDefaultButton"
                  className="text-white bg-overlay3 hover-bg-yellowpri w-[11rem] justify-between duration-150 focus-outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  type="button"
                  onClick={toggleDropdown}
                >
                  {selectedSortOption} {/* Display selected option text */}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdown"
                  className={
                    isDropdownVisible
                      ? "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[11rem] dark-bg-gray-700"
                      : "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark-bg-gray-700"
                  }
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark-text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li className="">
                      <a
                        href="#"
                        className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white"
                        onClick={() => handleSortOptionClick("Name(A-Z)")}
                      >
                        Name(A-Z)
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white"
                        onClick={() => handleSortOptionClick("Name(Z-A)")}
                      >
                        Name(z-A)
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white"
                        onClick={() =>
                          handleSortOptionClick("Rating(High-Low)")
                        }
                      >
                        Rating(High-Low)
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white"
                        onClick={() => handleSortOptionClick("Est.(Low-High)")}
                      >
                        Est.(Low-High)
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white"
                        onClick={() => handleSortOptionClick("Fees(Low-High)")}
                      >
                        Fees(Low-High)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* --------------Card-Container--------------------- */}
            <div className="card-container">
              <Link to="/error404">
                <div className="clg-grid grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-start gap-x-[12px] gap-y-[24px] mt-16">
                  {sortedColleges.map((college) => (
                    <CollegeCard key={college.id} {...college} />
                  ))}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//      {/* --------------Card-Container--------------------- */}

export default HomePage;
