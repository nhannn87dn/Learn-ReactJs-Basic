import React, { ChangeEvent, useState } from "react";

function TestForm() {
  const [inputs, setInputs] = useState({
    userName: "",
    passwords: "",
    gender: "",
    favoriteFruit: "",
    acceptTerms: false,
    comments: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (e.target.type === "checkbox") {
      const target = e.target as HTMLInputElement; // Kiểm tra kiểu
      setInputs((values) => ({ ...values, [target.name]: target.checked }));
    } else {
      const target = e.target as
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement; // Kiểm tra kiểu
      setInputs((values) => ({ ...values, [target.name]: target.value }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Current Values:", inputs);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="userName"
            value={inputs.userName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter your password:
          <input
            type="password"
            name="passwords"
            value={inputs.passwords}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Select your gender:
          <select name="gender" value={inputs.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Select your favorite fruit:
          <input
            type="radio"
            name="favoriteFruit"
            value="apple"
            checked={inputs.favoriteFruit === "apple"}
            onChange={handleChange}
          />
          Apple
          <input
            type="radio"
            name="favoriteFruit"
            value="banana"
            checked={inputs.favoriteFruit === "banana"}
            onChange={handleChange}
          />
          Banana
          <input
            type="radio"
            name="favoriteFruit"
            value="orange"
            checked={inputs.favoriteFruit === "orange"}
            onChange={handleChange}
          />
          Orange
        </label>
        <br />
        <label>
          Accept terms and conditions:
          <input
            type="checkbox"
            name="acceptTerms"
            checked={inputs.acceptTerms}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter your comments:
          <textarea
            name="comments"
            value={inputs.comments}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

function RegisterFormReact() {
  //   const [username, setUsername] = React.useState("");
  //   const [email, setEmail] = React.useState("");

  const [user, setUser] = React.useState({
    username: "",
    email: "",
  });

  const [isChecked, setIsChecked] = React.useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setIsChecked(!isChecked);
  };

  const handleOnChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUser({ ...user, username: e.target.value });
  };

  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUser({ ...user, email: e.target.value });
  };

  console.log("user", user);
  return (
    <div>
      <TestForm />
      <h2>RegisterFormReact</h2>
      <form
        onSubmit={(e) => {
          //Ngăn tính năng làm mới trang mặc định của form
          //có type submit
          e.preventDefault();

          if (user.email.length === 0) {
            console.log("Vui lòng nhập username");
          }
          console.log("submit", user);
        }}
      >
        <input
          onChange={handleOnChangeUserName}
          value={user.username}
          placeholder="user name"
          type="text"
          name="user_name"
        />
        <br />
        <input
          onChange={handleOnChangeEmail}
          value={user.email}
          placeholder="email"
          type="email"
          name="email"
        />
        <br />
        Select your pizza topping:
        <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Paneer"
            checked={isChecked}
            onChange={handleOnChange}
          />
          Paneer
        </div>
        <div className="result">
          Above checkbox is {isChecked ? "checked" : "un-checked"}.
        </div>
        <button className="btn btn_primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterFormReact;
