import React from "react";

const MyForm = () => {
//   const [username, setUsername] = React.useState("");
//   const [password, setPassword] = React.useState("");

  const [user, setUser] = React.useState({
    username: '',
    password: ''
  });

  return (
    <div>
      <form
        action=""
        onSubmit={() => {
          console.log("MyForm Submited");
        }}
      >
        <label htmlFor="">Username</label>
        <input onChange={(e)=>{
            console.log(e.target.value);
            const newUser = {...user, username: e.target.value}
            setUser(newUser);
        }} type="text" name="username" placeholder="username" />

        <p>{user.username}</p>

        <label htmlFor="">Password</label>
        <input onChange={(e)=>{
            console.log(e.target.value);
            const newUser = {...user, password: e.target.value}
            setUser(newUser);
        }} type="text" name="password" placeholder="password" />
         <p>{user.password}</p>
      </form>
    </div>
  );
};

export default MyForm;
