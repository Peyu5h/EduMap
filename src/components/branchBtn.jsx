import { useState } from "react";
import PropTypes from "prop-types";

const BranchBtns = ({ onBranchFilter }) => {
  const [buttonStates, setButtonStates] = useState([
    { id: 1, text: "All", isToggled: true, isHidden: true },
    { id: 2, text: "All", isToggled: true },
    { id: 3, text: "Computer", isToggled: false },
    { id: 4, text: "IT", isToggled: false },
    { id: 5, text: "EXTC", isToggled: false },
    { id: 6, text: "Civil", isToggled: false },
    { id: 7, text: "AI/DS", isToggled: false },
    { id: 8, text: "ECS", isToggled: false },
    { id: 9, text: "Chem", isToggled: false },
    { id: 10, text: "AI/ML", isToggled: false },
    { id: 11, text: "Mechanical", isToggled: false },
    { id: 12, text: "Robotics", isToggled: false },
  ]);

  const toggle = (id) => {
    setButtonStates((prevStates) =>
      prevStates.map((button) => {
        if (id === 1) {
          // Handle the "All" case
          return { ...button, isToggled: true };
        } else {
          return button.id === id
            ? { ...button, isToggled: !button.isToggled }
            : { ...button, isToggled: false };
        }
      })
    );

    if (id === 1) {
      onBranchFilter(null); // Pass null to indicate "All" branches
    } else {
      onBranchFilter(id); // Notify the parent component about the branch filter
    }
  };

  return (
    <div>
      <div className="branch-names flex space-x-4 flex-wrap space-y-4">
        {buttonStates.map((button) => (
          <button
            key={button.id}
            onClick={() => toggle(button.id)}
            className={`h-auto w-auto px-6 py-2 font-normal text-sm rounded-full text-white/40 ${
              button.isToggled
                ? "bg-yellowpri border-solid border-2 border-yellowpri text-sky-50 transition-all delay-100"
                : "bg-transparent border-solid border-2 border-white/40 text-white/40 transition-all delay-100"
            }
            ${button.isHidden ? "hidden" : "block"}`}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

BranchBtns.propTypes = {
  buttonStates: PropTypes.array.isRequired,
  onBranchFilter: PropTypes.func.isRequired, // Add this prop validation
};

export default BranchBtns;
