import PropTypes from "prop-types";

const RangeSlider = ({ minRange, maxRange, onMinChange, onMaxChange }) => {
  const handleMinChange = (e) => {
    onMinChange(parseFloat(e.target.value));
  };

  const handleMaxChange = (e) => {
    onMaxChange(parseFloat(e.target.value));
  };

  return (
    <div className="relative max-w-xl w-full">
      <div className="relative">
        <input
          type="range"
          step="1"
          min="0"
          max="100"
          value={minRange}
          onChange={handleMinChange}
          className="absolute pointer-events-none appearance-none z-20 h-1 w-full opacity-0 cursor-pointer"
        />

        <input
          type="range"
          step="1"
          min="0"
          max="100"
          value={maxRange}
          onChange={handleMaxChange}
          className="absolute pointer-events-none appearance-none z-20 h-1 w-full opacity-0 cursor-pointer"
        />

        <div className="relative z-10 h-1">
          <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>

          <div
            className="absolute z-20 top-0 bottom-0 rounded-md bg-yellowpri"
            style={{ right: `${100 - maxRange}%`, left: `${minRange}%` }}
          ></div>

          <div
            className="absolute z-30 w-3 h-3 ml-2 top-[-0.25rem] bg-yellowpri rounded-full"
            style={{
              left: `calc(${minRange}% - 0.75rem)`,
              zIndex: 30,
            }}
          ></div>

          <div
            className="absolute z-30 w-3 h-3 mr-2 top-[-0.25rem] bg-yellowpri rounded-full"
            style={{
              right: `calc(${100 - maxRange}% - 0.75rem)`,
              zIndex: 30,
            }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center py-2">
        <div>
          <input
            type="text"
            maxLength="2"
            value={`${minRange}%`}
            readOnly
            className="rounded w-12 bg-transparent text-start text-lg text-white/40"
          />
        </div>
        <div>
          <input
            type="text"
            maxLength="3"
            value={`${maxRange}%`}
            readOnly
            className="rounded w-12 bg-transparent text-end text-lg text-white/40"
          />
        </div>
      </div>
    </div>
  );
};

RangeSlider.propTypes = {
  minRange: PropTypes.number.isRequired,
  maxRange: PropTypes.number.isRequired,
  onMinChange: PropTypes.func.isRequired,
  onMaxChange: PropTypes.func.isRequired,
};

export default RangeSlider;
