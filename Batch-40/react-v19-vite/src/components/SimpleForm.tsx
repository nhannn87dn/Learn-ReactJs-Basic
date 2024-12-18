import React, { useState } from "react";

export default function SimpleForm() {
  //   const [email, setEmail] = React.useState("");
  //   const [password, setPassword] = React.useState("");
  //   const [agree, setAgree] = React.useState(0);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agree: 0,
  });
  console.log("<<=== 🚀 formData ===>>", formData);
  const onHandleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>SimpleForm</h1>
      <form
        onSubmit={(event) => {
          /* Ngăn form làm f5 lại page */
          event.preventDefault();
          console.log("submited");
          //Valid data begin here
          if (formData.email.length === 0) {
            alert("Vui lòng nhập email");
            return false;
          }
          if (formData.password.length < 6) {
            alert("Password phải có ít nhất 6 kí tự");
            return false;
          }
        }}
      >
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.value);
            setFormData({ ...formData, email: event.target.value });
          }}
          //   onChange={onHandleChangeData}
          value={formData.email}
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={(event) => {
            console.log(event.target.value);
          }}
          value={formData.password}
          type="text"
          name="password"
          placeholder="Password"
        />
        <select
          onChange={(e) => {
            console.log(e.target.value);
          }}
          name="gender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          onClick={onHandleChangeData}
          type="checkbox"
          name="agree"
          value={1}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
