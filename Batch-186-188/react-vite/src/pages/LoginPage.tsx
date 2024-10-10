import React, { ChangeEvent } from "react";

const LoginPage = () => {
  const [dataForm, setDataForm] = React.useState({
    email: "",
    password: "",
    agree: 0,
  });

  console.log("<<=== 🚀 dataForm ===>>", dataForm);

  //   const onHandleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setDataForm({ ...dataForm, email: event.target.value });
  //   };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (e.target.type === "checkbox") {
      const target = e.target as HTMLInputElement; // Kiểm tra kiểu
      setDataForm({ ...dataForm, [target.name]: target.checked ? 1 : 0 });
    } else {
      const target = e.target as
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement; // Kiểm tra kiểu
      setDataForm({ ...dataForm, [target.name]: target.value });
    }
  };

  return (
    <div className="container mx-auto">
      <h1>LoginPage</h1>
      <form>
        <input
          onChange={handleChange}
          name="email"
          value={dataForm.email}
          placeholder="email"
          type="text"
        />
        <input
          name="password"
          onChange={handleChange}
          value={dataForm.password}
          placeholder="password"
          type="text"
        />
        <label htmlFor="agree">
          <input
            value={dataForm.agree}
            onChange={handleChange}
            type="checkbox"
            name="agree"
            id="agree"
          />{" "}
          Ban co dong y dieu khoan su dung khong ?
        </label>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
