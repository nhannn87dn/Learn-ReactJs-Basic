import { useState } from "react";

type FormDataType = {
  email: string;
  password: string;
  agree: boolean;
};

const FormExample = () => {
  //   const [email, setEmail] = useState<string>("");
  //   const [password, setPassword] = useState<string>("");

  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
    agree: false,
  });

  console.log("<<=== 🚀 formData ===>>", formData);
  const onHandleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault(); //ngan form lam page load lai
    console.log("Da submit form", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const { name, type } = e.target; // Destructuring để lấy name và value
    let value: string | boolean = e.target.value;
    if (type === "checkbox") value = e.target.checked;
    setFormData((prevFormData) => ({
      ...prevFormData, // Giữ nguyên các giá trị khác
      [name]: value, // Cập nhật giá trị tương ứng với thuộc tính 'name'
    }));
  };

  return (
    <div className="p-5">
      <form onSubmit={onHandleSubmit} className="flex flex-col gap-y-5">
        <input
          onChange={handleChange}
          placeholder="Email"
          type="text"
          name="email"
        />
        <input
          onChange={handleChange}
          placeholder="Password"
          type="text"
          name="password"
        />
        <div className="checkbox">
          <label htmlFor="agree">
            <input
              onChange={handleChange}
              id="agree"
              type="checkbox"
              name="agree"
              value={1}
            />{" "}
            Remember password ?
          </label>
        </div>
        <div>
          <button className="w-full">Login</button>
        </div>
      </form>
    </div>
  );
};

export default FormExample;
