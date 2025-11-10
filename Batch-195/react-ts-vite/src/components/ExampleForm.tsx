import { useState } from "react";

const ExampleForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [gender, setGender] = useState(0); // 0 là nữ, 1 là nam
  return (
    <div>
      <h2 className="font-bold my-5">Example Form Component</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //ngắn form ko load lại trang

          console.log("Form submitted");
          //TODO: lấy dữ liệu từ form và validate
          console.log("<<=== 🚀 email ===>>", email);
          console.log("<<=== 🚀 password ===>>", password);
          console.log("<<=== 🚀 rememberMe ===>>", rememberMe);
          console.log("<<=== 🚀 gender ===>>", gender);
        }}
      >
        <div className="mb-4 flex items-center">
          <label className="w-[150px]" htmlFor="email">
            Email:
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
            onChange={(e) => {
              /* Chỉ riêng checkbox mới .target.checked */
              setRememberMe(e.target.checked);
            }}
            id="rememberMe"
            type="checkbox"
            name="rememberMe"
          />
        </div>
        <div className="mb-4 flex">
          <label className="w-[150px]">Gender:</label>
          <input
            onChange={(e) => {
              setGender(e.target.checked ? 1 : 0);
            }}
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

export default ExampleForm;
