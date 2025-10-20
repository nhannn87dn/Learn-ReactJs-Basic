//props  = {icon: '', bgColor: '', label: ''}
//{icon, bgColor, label} = props;
interface IButtonV1 {
    icon: React.ReactNode, 
    bgColor: string, 
    label: string 
}

const ButtonV1 = ({icon, bgColor, label}: IButtonV1) => {
  const buttonStyle = {
    backgroundColor: bgColor ? bgColor : "#f80",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: 8,
    display: "flex",
    columnGap: 8,
  };


  return (
    <button style={buttonStyle}>
      {icon} {label}
    </button>
  );
};

export default ButtonV1;
