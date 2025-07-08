import "./App.css";
import Accessories from "./components/Accessories";

import BlockUI1 from "./components/BlockUI1";
import ChinhSach from "./components/ChinhSach";
import MyCV from "./components/MyCV";
function App() {
  const isShow = true;
  const fruits = ["Orange", "Apple", "Banana", "Kiwi", "Lemon"];
  const users = [
    { id: 1, name: "Van A", email: "aaa@gmail.com" },
    { id: 2, name: "Van B", email: "b@gmail.com" },
    { id: 3, name: "Van C", email: "c@gmail.com" },
  ];
  console.log("App Rendering");
  if (!isShow) {
    return null;
  }
  return (
    <div className="container mx-auto">
      <BlockUI1 />
      {/* {isShow && <BlockUI1 />} */}
      {/* {isShow ? <BlockUI1 /> : null} */}
      {/* {isShow === true ? <BlockUI1 /> : null} */}
      <ul>
        {/* <li>{fruits[0]}</li>
        <li>{fruits[1]}</li>
        <li>{fruits[2]}</li> */}
        {fruits.length > 0 &&
          fruits.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <hr />
      <ChinhSach />
      <hr />
      <Accessories />
      <hr />
      <MyCV />
    </div>
  );
}

export default App;
