// const props = { label: "", icon: "" };
// const { label, icon } = props; //destructuring
import "./Button.css";

const Button = ({
  label,
  icon,
  type = "btn_orange",
}: {
  label: string;
  icon?: React.ReactNode;
  type?: string;
}) => {
  return (
    <button className={`btn ${type}`}>
      {icon} {label}
    </button>
  );
};

export default Button;
