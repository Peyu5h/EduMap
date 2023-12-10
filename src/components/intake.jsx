const Intake = () => {
  return (
    <div>
      <div className="flex justify-center items-center mx-auto shadow-md sm:rounded-lg md:mr-8 mb-8">
        <table className="w-full max-w-screen-md h-[400px] shadow-xl rounded-lg overflow-hidden text-sm text-left text-tabletxt">
          <thead className="text-xs text-gray-700 uppercase bg-overlay3 dark:text-tabletxt">
            <tr>
              <th scope="col" className="text-lg px-6 py-3 font-pop font-bold">
                Courses
              </th>
              <th scope="col" className="md:px-48 px-16 py-3">
                EWS
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Computer Engineering
              </th>
              <td className="md:px-48 px-16 py-4">120</td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Electronics & telecommunication
              </th>
              <td className="md:px-48 px-16 py-4">120</td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Electrical Engineering
              </th>
              <td className="md:px-48 px-16 py-4">60</td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Electronics Engineering
              </th>
              <td className="md:px-48 px-16 py-4">60</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Information Technology
              </th>
              <td className="md:px-48 px-16 py-4">120</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Intake;
