const hello = (name: string) => {
  return name;
};

hello("Tuan"); // Tuan
hello("Nam"); // Nam

type ButtonProps = {
  name: string;
  bgColor: string;
  icon: React.ReactNode; //type của một component
};
const Button = (props: ButtonProps) => {
  console.log("props", props);
  return (
    <button
      style={{
        backgroundColor: props.bgColor,
        color: "#fff",
      }}
    >
      {props.icon} {props.name}
    </button>
  );
};

export default Button;
