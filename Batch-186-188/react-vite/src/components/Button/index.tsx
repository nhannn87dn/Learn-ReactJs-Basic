type TButton = {
  label: string;
  bgColor: string;
  icon?: React.ReactNode; //Kiễu dữ liệu của component
};

const Button = ({ label, icon, bgColor }: TButton) => {
  // console.log(props);
  return (
    <button className={`flex items-center gap-x-2 btn ${bgColor}`}>
      {icon} <span>{label}</span>
    </button>
  );
};

export default Button;
