import React, { useState } from "react";

const FormSimpleExample = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("<<=== 🚀 e.target.value ===>>", e.target.value);
    setEmail(e.target.value);
  };

  const onChangeHandlePassowrd = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("<<=== 🚀 e.target.value ===>>", e.target.value);
    setPassword(e.target.value);
  };

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //ngăn form làm re-fresh app
    console.log("Đã submit");
    console.log("<<=== 🚀 email ===>>", email);
    console.log("<<=== 🚀 password ===>>", password);
    if (password.length === 0) {
      alert("Bạn chưa nhập mật khẩu");
      return;
    }
    if (password.length < 6) {
      alert("Mật khẩu phải >= 6 kí tự");
      return;
    }
  };

  return (
    <div>
      <h1>FormSimpleExample</h1>
      <form
        onSubmit={onHandleSubmit}
        autoComplete="off"
        className="flex flex-col gap-y-2 max-w-[300px]"
      >
        <input
          type="email"
          value={email}
          name="email"
          onChange={onChangeHandleEmail}
          placeholder="Enter your email"
        />
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChangeHandlePassowrd}
          placeholder="Password"
        />
        <button className="justify-center" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSimpleExample;
