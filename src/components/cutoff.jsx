import { useState } from "react";

const Cutoff = () => {
  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedRound, setSelectedRound] = useState("Round 1");

  //   MHT-CET CUTOFF
  const cutoffData = {
    2023: {
      "Round 1": [
        {
          course: "BE Electrical Engineering",
          EWS: 8,
          GOBC: 53,
          GOPEN: 53,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
        {
          course: "BE Electronics & Telecom Engineering",
          EWS: 10,
          GOBC: 54,
          GOPEN: 55,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
        {
          course: "BE Electronics and Computer Engineering",
          EWS: 10,
          GOBC: 54,
          GOPEN: 55,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
        {
          course: "BE Information Technology",
          EWS: 10,
          GOBC: 54,
          GOPEN: 55,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
        {
          course: "BE Computer Engineering",
          EWS: 10,
          GOBC: 54,
          GOPEN: 55,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
      ],
      "Round 2": [
        {
          course: "BE Electrical Engineering",
          EWS: 7,
          GOBC: 50,
          GOPEN: 52,
          TFWS: 28,
          GVJH: 32,
          GSCH: 31,
          GOBCO: 59,
          GOPENO: 60,
          LOPEN: 74,
          LOBC: 25,
        },
        {
          course: "BE Electronics & Telecom Engineering",
          EWS: 56,
          GOBC: 68,
          GOPEN: 61,
          TFWS: 61,
          GVJH: 63,
          GSCH: 52,
          GOBCO: 78,
          GOPENO: 61,
          LOPEN: 71,
          LOBC: 53,
        },
        {
          course: "BE Electronics and Computer Engineering",
          EWS: 72,
          GOBC: 82,
          GOPEN: 74,
          TFWS: 80,
          GVJH: 78,
          GSCH: 68,
          GOBCO: 86,
          GOPENO: 78,
          LOPEN: 91,
          LOBC: 78,
        },
        {
          course: "BE Information Technology",
          EWS: 86,
          GOBC: 89,
          GOPEN: 87,
          TFWS: 84,
          GVJH: 86,
          GSCH: 74,
          GOBCO: 90,
          GOPENO: 88,
          LOPEN: 93,
          LOBC: 80,
        },
        {
          course: "BE Computer Engineering",
          EWS: 89,
          GOBC: 91,
          GOPEN: 90,
          TFWS: 86,
          GVJH: 87,
          GSCH: 78,
          GOBCO: 93,
          GOPENO: 88,
          LOPEN: 94,
          LOBC: 83,
        },
      ],
    },
    2022: {
      "Round 1": [
        {
          course: "BE Electrical Engineering",
          EWS: 6,
          GOBC: 46,
          GOPEN: 52,
          TFWS: 32,
          GVJH: 32,
          GSCH: 31,
          GOBCO: 59,
          GOPENO: 58,
          LOPEN: 74,
          LOBC: 25,
        },
        {
          course: "BE Electronics & Telecom Engineering",
          EWS: 54,
          GOBC: 67,
          GOPEN: 60,
          TFWS: 61,
          GVJH: 63,
          GSCH: 52,
          GOBCO: 78,
          GOPENO: 61,
          LOPEN: 71,
          LOBC: 53,
        },
        {
          course: "BE Electronics and Computer Engineering",
          EWS: 71,
          GOBC: 81,
          GOPEN: 74,
          TFWS: 80,
          GVJH: 78,
          GSCH: 68,
          GOBCO: 86,
          GOPENO: 78,
          LOPEN: 91,
          LOBC: 78,
        },
        {
          course: "BE Information Technology",
          EWS: 85,
          GOBC: 89,
          GOPEN: 87,
          TFWS: 84,
          GVJH: 86,
          GSCH: 74,
          GOBCO: 90,
          GOPENO: 88,
          LOPEN: 93,
          LOBC: 80,
        },
        {
          course: "BE Computer Engineering",
          EWS: 88,
          GOBC: 91,
          GOPEN: 90,
          TFWS: 86,
          GVJH: 87,
          GSCH: 78,
          GOBCO: 93,
          GOPENO: 88,
          LOPEN: 94,
          LOBC: 83,
        },
      ],
      "Round 2": [
        {
          course: "BE Electrical Engineering",
          EWS: 9,
          GOBC: 53,
          GOPEN: 53,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
        {
          course: "BE Electronics & Telecom Engineering",
          EWS: 10,
          GOBC: 54,
          GOPEN: 55,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
        {
          course: "BE Electronics and Computer Engineering",
          EWS: 10,
          GOBC: 54,
          GOPEN: 55,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
        {
          course: "BE Information Technology",
          EWS: 10,
          GOBC: 54,
          GOPEN: 55,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
        {
          course: "BE Computer Engineering",
          EWS: 10,
          GOBC: 54,
          GOPEN: 55,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
      ],
    },
    2021: {
      "Round 1": [
        {
          course: "BE Electrical Engineering",
          EWS: 8,
          GOBC: 53,
          GOPEN: 53,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
        {
          course: "BE Electronics & Telecom Engineering",
          EWS: 10,
          GOBC: 54,
          GOPEN: 55,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
        {
          course: "BE Electronics and Computer Engineering",
          EWS: 10,
          GOBC: 54,
          GOPEN: 55,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
        {
          course: "BE Information Technology",
          EWS: 10,
          GOBC: 54,
          GOPEN: 55,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
        {
          course: "BE Computer Engineering",
          EWS: 10,
          GOBC: 54,
          GOPEN: 55,
          TFWS: 32,
          GVJH: 32,
          GSCH: 32,
          GOBCO: 61,
          GOPENO: 61,
          LOPEN: 74,
          LOBC: 26,
        },
      ],
      "Round 2": [
        {
          course: "BE Electrical Engineering",
          EWS: 7,
          GOBC: 50,
          GOPEN: 52,
          TFWS: 28,
          GVJH: 32,
          GSCH: 31,
          GOBCO: 59,
          GOPENO: 60,
          LOPEN: 74,
          LOBC: 25,
        },
        {
          course: "BE Electronics & Telecom Engineering",
          EWS: 56,
          GOBC: 68,
          GOPEN: 61,
          TFWS: 61,
          GVJH: 63,
          GSCH: 52,
          GOBCO: 78,
          GOPENO: 61,
          LOPEN: 71,
          LOBC: 53,
        },
        {
          course: "BE Electronics and Computer Engineering",
          EWS: 72,
          GOBC: 82,
          GOPEN: 74,
          TFWS: 80,
          GVJH: 78,
          GSCH: 68,
          GOBCO: 86,
          GOPENO: 78,
          LOPEN: 91,
          LOBC: 78,
        },
        {
          course: "BE Information Technology",
          EWS: 86,
          GOBC: 89,
          GOPEN: 87,
          TFWS: 84,
          GVJH: 86,
          GSCH: 74,
          GOBCO: 90,
          GOPENO: 88,
          LOPEN: 93,
          LOBC: 80,
        },
        {
          course: "BE Computer Engineering",
          EWS: 89,
          GOBC: 91,
          GOPEN: 90,
          TFWS: 86,
          GVJH: 87,
          GSCH: 78,
          GOBCO: 93,
          GOPENO: 88,
          LOPEN: 94,
          LOBC: 83,
        },
      ],
    },
    // ------------------------ //
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleRoundChange = (round) => {
    setSelectedRound(round);
  };

  return (
    <div>
      <div className="w-[7rem] h-30 p-3 rounded-tr-xl rounded-bl-xl mb-8 bg-yellowpri text-center font-pop font-semibold text-xl">
        Cutoff
      </div>

      <div className="btn-option flex flex-col space-y-5 md:flex-row md:space-y-0 justify-between text-center items-center my-8">
        <div className="flex space-x-4 mt-4">
          <button
            className={`bg-${
              selectedRound === "Round 1" ? "yellowpri" : "overlay3"
            } text-white p-4 rounded-md`}
            onClick={() => handleRoundChange("Round 1")}
          >
            Round 1
          </button>
          <button
            className={`bg-${
              selectedRound === "Round 2" ? "yellowpri" : "overlay3"
            } text-white p-4 rounded-md`}
            onClick={() => handleRoundChange("Round 2")}
          >
            Round 2
          </button>
        </div>

        <div className="text-2xl text-white font-bold ">MHT-CET CUTOFF</div>

        <div className="flex space-x-4 mx-5">
          <button
            className={`bg-${
              selectedYear === 2023 ? "yellowpri" : "overlay3"
            } text-white p-3 rounded-md`}
            onClick={() => handleYearChange(2023)}
          >
            2023
          </button>
          <button
            className={`bg-${
              selectedYear === 2022 ? "yellowpri" : "overlay3"
            } text-white p-3 rounded-md`}
            onClick={() => handleYearChange(2022)}
          >
            2022
          </button>
          <button
            className={`bg-${
              selectedYear === 2021 ? "yellowpri" : "overlay3"
            } text-white p-3 rounded-md`}
            onClick={() => handleYearChange(2021)}
          >
            2021
          </button>
        </div>
      </div>

      <div className="relative w-[75%] mx-auto overflow-x-scroll shadow-md sm:rounded-lg">
        <table className="w-full h-[400px] text-sm text-left text-tabletxt">
          <thead className="text-xs uppercase bg-overlay3 text-tabletxt">
            <tr>
              <th scope="col" className="px-6 py-3 font-pop font-bold">
                <span className="text-lg">Courses</span>
              </th>
              <th scope="col" className="px-6 py-3">
                EWS
              </th>
              <th scope="col" className="px-6 py-3">
                GOBC
              </th>
              <th scope="col" className="px-6 py-3">
                GOPEN
              </th>
              <th scope="col" className="px-6 py-3">
                TFWS
              </th>
              <th scope="col" className="px-6 py-3">
                GVJH
              </th>
              <th scope="col" className="px-6 py-3">
                GSCH
              </th>
              <th scope="col" className="px-6 py-3">
                GOBCO
              </th>
              <th scope="col" className="px-6 py-3">
                GOPENO
              </th>
              <th scope="col" className="px-6 py-3">
                LOPEN
              </th>
              <th scope="col" className="px-6 py-3">
                LOBC
              </th>
              {/* Add more headers for each field */}
            </tr>
          </thead>

          <tbody>
            {cutoffData[selectedYear][selectedRound].map(
              (courseData, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } dark:bg-gray-900 dark:border-gray-700`}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {courseData.course}
                  </th>
                  <td className="px-6 py-4">{courseData.EWS}</td>
                  <td className="px-6 py-4">{courseData.GOBC}</td>
                  <td className="px-6 py-4">{courseData.GOPEN}</td>
                  <td className="px-6 py-4">{courseData.TFWS}</td>
                  <td className="px-6 py-4">{courseData.GVJH}</td>
                  <td className="px-6 py-4">{courseData.GSCH}</td>
                  <td className="px-6 py-4">{courseData.GOBCO}</td>
                  <td className="px-6 py-4">{courseData.GOPENO}</td>
                  <td className="px-6 py-4">{courseData.LOPEN}</td>
                  <td className="px-6 py-4">{courseData.LOBC}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* JEE-Mains CUTOFF------------------------ */}

      <div className="flex  sm:justify-center items-center mx-2 shadow-md mt-36 sm:overflow-x-hidden overflow-x-scroll sm:rounded-lg md:mr-8 mb-8">
        <div className="flex-col space-y-6">
          <div className="text-md ml-2 text-white font-semibold">
            JEE-MAINS CUTOFF
          </div>
          <table className="w-full max-w-screen-md h-[400px] shadow-xl rounded-lg overflow-hidden text-sm text-left text-tabletxt">
            <thead className="text-md text-gray-700 uppercase bg-overlay3 dark:text-tabletxt">
              <tr>
                <th scope="col" className="text- px-6 py-3 font-pop font-bold">
                  Courses
                </th>
                <th scope="col" className="md:px-48 px-16 py-3">
                  General
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  BE Computer Engineering{" "}
                </th>
                <td className="md:px-48 px-16 py-4">10086</td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  BE Information Technology{" "}
                </th>
                <td className="md:px-48 px-16 py-4">13106</td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  BE Electronics and Computer Engineering{" "}
                </th>
                <td className="md:px-48 px-16 py-4">18182</td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  BE Electronics & Telecom Engineering{" "}
                </th>
                <td className="md:px-48 px-16 py-4">25645</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  BE Electrical Engineering{" "}
                </th>
                <td className="md:px-48 px-16 py-4">36156</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cutoff;
