import { useState } from "react";
import Recruiters from "./ourRecruiters";

const Placement = () => {
  const [selectedYear, setSelectedYear] = useState(2023);
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <>
      <div className="w-[10rem] h-30 p-3 rounded-tr-xl rounded-bl-xl mb-8 bg-yellowpri text-center font-pop font-semibold text-xl">
        Placement
      </div>
      <div className="flex items-center flex-col   ">
        <div className="flex flex-col mb-6 sm:flex-row md:mb-0 items-center justify-between mx-4">
          <div className="btn-option flex flex-col space-y-5 md:flex-row md:space-y-0 justify-between text-center items-center my-8">
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

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for Student"
            />
          </div>
        </div>

        <div className="flex justify-center items-center w-full shadow-md sm:rounded-lg md:mr-8 mb-8">
          <table className="w-full max-w-screen-md h-[400px] shadow-xl rounded-lg overflow-hidden text-sm text-left text-tabletxt">
            <thead className="text-xs text-gray-700 uppercase bg-overlay3 dark:text-tabletxt">
              <tr>
                <th
                  scope="col"
                  className="text-md px-6 py-3 font-pop font-bold"
                >
                  Company Name
                </th>
                <th scope="col" className=" text-md md:px-48 px-16 py-3">
                  {" "}
                  Students Placed
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Mastek Ltd.{" "}
                </th>
                <td className="md:px-48 px-16 py-4">03</td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Acty Systems{" "}
                </th>
                <td className="md:px-48 px-16 py-4">07</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Hexaware Technologies{" "}
                </th>
                <td className="md:px-48 px-16 py-4">23</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Mindstix Software Labs{" "}
                </th>
                <td className="md:px-48 px-16 py-4">08</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Zeus Learning{" "}
                </th>
                <td className="md:px-48 px-16 py-4">01</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  IBM
                </th>
                <td className="md:px-48 px-16 py-4">43</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  TCS
                </th>
                <td className="md:px-48 px-16 py-4">05</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  TSS Consultancy{" "}
                </th>
                <td className="md:px-48 px-16 py-4">21</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Ugam|A Merkle Company{" "}
                </th>
                <td className="md:px-48 px-16 py-4">03</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Exponentia.ai
                </th>
                <td className="md:px-48 px-16 py-4">10</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Burns & McDonnell{" "}
                </th>
                <td className="md:px-48 px-16 py-4">01</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Kanini Software{" "}
                </th>
                <td className="md:px-48 px-16 py-4">02</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Decimal Point{" "}
                </th>
                <td className="md:px-48 px-16 py-4">06</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Vistaar{" "}
                </th>
                <td className="md:px-48 px-16 py-4">10</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  ARCON Techsolutions{" "}
                </th>
                <td className="md:px-48 px-16 py-4">08</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Vhiron{" "}
                </th>
                <td className="md:px-48 px-16 py-4">04</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Jaro Education{" "}
                </th>
                <td className="md:px-48 px-16 py-4">03</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Newfold Digital (Endurance){" "}
                </th>
                <td className="md:px-48 px-16 py-4">04</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Satva Solutions{" "}
                </th>
                <td className="md:px-48 px-16 py-4">13</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Tech Mahindra{" "}
                </th>
                <td className="md:px-48 px-16 py-4">18</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Tata Advance System Ltd{" "}
                </th>
                <td className="md:px-48 px-16 py-4">05</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Unifynd{" "}
                </th>
                <td className="md:px-48 px-16 py-4">01</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Klutchh Gaming Pvt Ltd.{" "}
                </th>
                <td className="md:px-48 px-16 py-4">32</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Capgemini{" "}
                </th>
                <td className="md:px-48 px-16 py-4">01</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Allerin{" "}
                </th>
                <td className="md:px-48 px-16 py-4">06</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Lendenclub{" "}
                </th>
                <td className="md:px-48 px-16 py-4">01</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  Swan Solution{" "}
                </th>
                <td className="md:px-48 px-16 py-4">01</td>
              </tr>
              <tr className="bg-white border-b dark:bg-overlay3 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {" "}
                  TOTAL STUDENTS PLACED{" "}
                </th>
                <td className="md:px-48 px-16 py-4">
                  326 <span className="text-sm">(In progress)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Other Recruters......... */}

        <div className="Reviews flex flex-col items-start text-3xl font-semibold my-16">
          <div className="font-pop text-white mx-auto ">Major Recruiters</div>
          <div className="h-[2px] w-56 mx-auto  bg-yellowpri mt-2"></div>
        </div>
        <div className="p-[64px]">
          <Recruiters />
        </div>

        {/* Previous year branch wise */}

        <div className="privious-year">
          <div className="sm:relative w-[75%] sm:mx-auto overflow-x-scroll shadow-md sm:rounded-lg">
            <table className="w-full h-[400px] text-sm text-left text-tabletxt">
              <thead className="text-xs uppercase bg-overlay3 text-tabletxt">
                <tr>
                  <th scope="col" className="px-6 py-3 font-pop font-bold">
                    <span className="text-lg">Year</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Computer Engineering
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Information Technology
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Electronics and Computer Engineering
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Electronics & Telecom Engineering
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Electrical Engineering
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowraptext-white"
                  >
                    2023
                    <span className="font-medium text-sm text-gray-400">
                      (in progress)
                    </span>
                  </th>
                  <td className="px-6 py-3">117</td>
                  <td className="px-6 py-3">121</td>
                  <td className="px-6 py-3">48</td>
                  <td className="px-6 py-3">22</td>
                  <td className="px-6 py-3">18</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowraptext-white"
                  >
                    2022
                  </th>
                  <td className="px-6 py-3">116</td>
                  <td className="px-6 py-3">189</td>
                  <td className="px-6 py-3">109</td>
                  <td className="px-6 py-3">27</td>
                  <td className="px-6 py-3">24</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowraptext-white"
                  >
                    2022
                  </th>
                  <td className="px-6 py-3">106</td>
                  <td className="px-6 py-3">119</td>
                  <td className="px-6 py-3">83</td>
                  <td className="px-6 py-3">44</td>
                  <td className="px-6 py-3">17</td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowraptext-white"
                  >
                    2022
                  </th>
                  <td className="px-6 py-3">99</td>
                  <td className="px-6 py-3">90</td>
                  <td className="px-6 py-3">65</td>
                  <td className="px-6 py-3">33</td>
                  <td className="px-6 py-3">26</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placement;
