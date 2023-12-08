type TButton = {
  label: string;
  icon?: React.ReactNode; //Dấu ? Có thể không cần truyền icon
};

function Button({ label, icon }: TButton) {
  //console.log("<<=== 🚀 props ===>>", props);
  return (
    <button>
      {icon} {label}
    </button>
  );
}

Button.defaultProps = {
  label: "No name",
};

//Xuất ra để các component khác sử dụng với cú pháp import
export default Button;
