type ButtonProps = {
  name: string;
  bgColor?: string;
  icon: React.ReactNode; //type của một component
  onHandleClick: ()=>void
};
const Button = (props: ButtonProps) => {
    return (
    <button
     className="btn"
     onClick={props.onHandleClick}
    >
      {props.icon} {props.name}
    </button>
  );
};

export default Button;
