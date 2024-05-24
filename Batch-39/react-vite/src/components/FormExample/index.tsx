import React from "react";

const FormExample = () => {
  //   const [fullName, setFullName] = React.useState("");
  //   const [email, setEmail] = React.useState("");

  const [user, setUser] = React.useState({
    fullName: "",
    email: "",
    province: "",
    agree: false,
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //Ngăn form fresh App
          //bắt đầu quá trình validation ở đây
          console.log("<<=== 🚀 user ===>>", user);
        }}
      >
        <h1 className="font-bold text-3xl">Register Form</h1>
        <div className="input-item my-2 flex items-center gap-x-3">
          <label className="font-bold w-[120px]">FullName</label>
          <input
            onChange={(e) => {
              //Cập nhật lại giá trị của phần tử trong object
              setUser({ ...user, fullName: e.target.value });
            }}
            type="text"
            name="fullName"
          />
        </div>
        <div className="input-item my-2 flex items-center gap-x-3">
          <label className="font-bold  w-[120px]">Email</label>
          <input
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            type="text"
            name="email"
          />
        </div>
        <div className="input-item my-2 flex items-center gap-x-3">
          <label className="font-bold  w-[120px]">Pronvice</label>
          <select
            onChange={(e) => {
              setUser({ ...user, province: e.target.value });
            }}
            name="province"
          >
            <option value="">Vui lòng chọn Province</option>
            <option value="1">Hà Nội</option>
            <option value="2">Đà Nẵng</option>
          </select>
        </div>

        <div className="input-item my-2 flex items-center gap-x-3">
          <label className="font-bold  w-[120px]"></label>
          <input
            onChange={(e) => {
              setUser({ ...user, agree: e.target.checked });
            }}
            type="checkbox"
            name="agree"
          />
          Bạn có đồng ý với điều khoản sử dụng không ?
        </div>

        <div className="input-item my-2 flex items-center gap-x-3">
          <label className="font-bold  w-[120px]"></label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormExample;
