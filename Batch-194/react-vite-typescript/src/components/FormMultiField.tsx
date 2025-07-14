import React, { useState } from "react";

const FormMultiField = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Destructuring để lấy name và value
    setFormData((prevFormData) => ({
      ...prevFormData, // Giữ nguyên các giá trị khác
      [name]: value, // Cập nhật giá trị tương ứng với thuộc tính 'name'
    }));
  };

  // const onChangeHandleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("<<=== 🚀 e.target.value ===>>", e.target.value);
  //   setFormData({ ...formData, email: e.target.value });
  // };

  // const onChangeHandlePassowrd = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("<<=== 🚀 e.target.value ===>>", e.target.value);
  //   //setPassword(e.target.value);
  //   setFormData({ ...formData, password: e.target.value });
  // };

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //ngăn form làm re-fresh app
    console.log("Đã submit", formData);

    if (formData.password.length === 0) {
      alert("Bạn chưa nhập mật khẩu");
      return;
    }
    if (formData.password.length < 6) {
      alert("Mật khẩu phải >= 6 kí tự");
      return;
    }
  };

  return (
    <div>
      <h1>FormMultiField</h1>
      <form
        onSubmit={onHandleSubmit}
        autoComplete="off"
        className="flex flex-col gap-y-2 max-w-[300px]"
      >
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <input
          type="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="justify-center" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormMultiField;
