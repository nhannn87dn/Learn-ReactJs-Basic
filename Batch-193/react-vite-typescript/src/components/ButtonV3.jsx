import PropTypes from "prop-types";

const ButtonV3 = ({ label, icon }) => {
  let defaultStyle = "bg-blue-500 text-white ";
  return (
    <button className={`${defaultStyle} cursor-pointer rounded px-3 py-2`}>
      {icon} {label}
    </button>
  );
};

ButtonV3.PropTypes = {
  label: PropTypes.string,
  icon: PropTypes.number,
};

export default ButtonV3;
