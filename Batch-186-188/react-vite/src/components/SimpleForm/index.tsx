import React from "react";

// let user = {
//     userName: "",
//     email: "",
//   }

// //user.userName = 'nhan' spread
// user = {...user, userName: 'nhan'} //ES6

type TUser = {
  userName: string;
  email: string;
  agree: number;
};

const SimpleForm = () => {
  //   const [userName, setUserName] = React.useState("");
  //   const [email, setEmail] = React.useState("");
  const [user, setUser] = React.useState<TUser>({
    userName: "",
    email: "",
    agree: 0,
  });

  return (
    <div>
      <h2>SimpleForm</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //Ngăn ko cho form làm page load lại

          console.log(user);
          // Kiểm tra tính hợp lệ của các giá trị input

          if (user.userName.length < 4) {
            alert("Vui lòng nhập username > 4 kí tự");
            return false;
          }

          if (user.agree === 0) {
            alert("Bạn phải đồng ý với điều khoản click nút Submit");
            return false;
          }
        }}
      >
        <input
          placeholder="user_name"
          onChange={(e) => {
            console.log(e.target.value);
            setUser({ ...user, userName: e.target.value });
          }}
          type="text"
          name="user_name"
          value={user.userName}
        />
        <input
          placeholder="Email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          type="email"
          name="email"
        />
        <label htmlFor="agree">
          <input
            onChange={(e) => {
              console.log("agree", e.target.checked);
              setUser({ ...user, agree: e.target.checked ? 1 : 0 });
            }}
            id="agree"
            name="agree"
            value={1}
            type="checkbox"
          />{" "}
          Bạn có đồng ý điều khoản không ?
        </label>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
