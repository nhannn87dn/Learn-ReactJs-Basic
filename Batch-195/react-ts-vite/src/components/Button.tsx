export default function Button(props) {
  console.log("props", props);
  let bgDefault = "bg-indigo-500";
  if (props.bgColor) {
    bgDefault = props.bgColor;
  }

  return (
    <button
      className={`flex ${bgDefault} text-white py-3 px-5 rounded-xl hover:bg-indigo-600 cursor-pointer`}
    >
      {props.icon} {props.label}
    </button>
  );
}
