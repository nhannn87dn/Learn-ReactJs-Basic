/**
 * props là một object
 * props = {label: 'login', type: 'dark'}
 * label
 * ES6:
 * const {label, type} = props;
 */
interface IButtonProps {
  label: string;
  type: string;
  icon?: React.ReactNode; //tuy chon
  onHandleCLick?: () => void;
}
const ButtonV2 = ({ label, type, icon, onHandleCLick }: IButtonProps) => {
  let defaultStyle = "bg-orange-500 text-white hover:bg-orange-600";
  if (type && type === "dark") {
    defaultStyle = "bg-slate-800 text-white hover:bg-slate-900";
  } else if (type && type === "outline") {
    defaultStyle = "bg-white text-orange-500 border border-orange-500";
  }
  return (
    <button
      onClick={onHandleCLick}
      className={`${defaultStyle} py-2 px-4 rounded  cursor-pointer flex gap-x-2 items-center`}
    >
      {icon} {label}
    </button>
  );
};
export default ButtonV2;
