import { useState } from "react";

const ExampleFormV2 = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);
  // const [gender, setGender] = useState(0); // 0 là nữ, 1 là nam

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    gender: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target; // Destructuring để lấy name và value

    let v: string | boolean | number = value;
    if (type === "checkbox") {
      v = checked;
    }
    if (type === "checkbox" && name === "gender") {
      v = checked ? 1 : 0;
    }

    setFormData((prevFormData) => ({
      ...prevFormData, // Giữ nguyên các giá trị khác
      [name]: v, // Cập nhật giá trị tương ứng với thuộc tính 'name'
    }));
  };

  return (
    <div>
      <h2 className="font-bold my-5">Example Form Component V2</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //ngắn form ko load lại trang

          console.log("Form submitted");
          //TODO: lấy dữ liệu từ form và validate
          console.log(formData);
        }}
      >
        <div className="mb-4 flex items-center">
          <label className="w-[150px]" htmlFor="email">
            Email:
          </label>
          <input
            onChange={handleChange}
            placeholder="Email"
            id="email"
            type="text"
            name="email"
          />
        </div>
        <div className="mb-4 flex">
          <label className="w-[150px]" htmlFor="password">
            Password:
          </label>
          <input
            onChange={handleChange}
            placeholder="Password"
            id="password"
            type="text"
            name="password"
          />
        </div>
        <div className="mb-4 flex">
          <label className="w-[150px]" htmlFor="rememberMe">
            Remember Me:
          </label>
          <input
            onChange={handleChange}
            id="rememberMe"
            type="checkbox"
            name="rememberMe"
          />
        </div>
        <div className="mb-4 flex">
          <label className="w-[150px]">Gender:</label>
          <input
            onChange={handleChange}
            name="gender"
            type="checkbox"
            className="checkbox"
          />{" "}
          Chọn nếu làm Nam
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExampleFormV2;
