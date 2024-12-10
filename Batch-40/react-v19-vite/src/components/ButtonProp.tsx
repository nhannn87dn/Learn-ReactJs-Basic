import { IButton } from "../types/button";
/**
 * destructuring js
 * props = {icon, label}
 * {icon, label} = props
 */

function ButtonProp({ icon, label, type }: IButton) {
  let finalStyle = "";
  if (type === "outline") {
    finalStyle = "bg-white";
  } else if (type === "primary") {
    finalStyle =
      "bg-orange-600 text-white border-orange-600 hover:bg-orange-700";
  } else if (type === "ghost") {
    finalStyle = "bg-transparent border-0";
  }

  return (
    <>
      <button className={`flex items-center gap-x-[10px] ${finalStyle}`}>
        {icon} {label}
      </button>
    </>
  );
}

export default ButtonProp;
