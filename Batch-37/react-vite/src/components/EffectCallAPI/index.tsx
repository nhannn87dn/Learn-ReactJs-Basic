import React from "react";

const EffectCallAPI = () => {
  console.log("render EffectCallAPI");
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    //Gọi API để lấy dữ liệu
    //fetch là một Promise
    setLoading(true); //bắt đầu xoay
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        //Lấy được kết quả
        //update lại State users
        setLoading(false); //tắt xoay
        setUsers(data);
      });
  }, []);

  console.log(users);

  return (
    <div>
      {console.log("UI render")}
      <h2>List Users</h2>
      {loading && <p>Loading....</p>}
      <div className="list_users border border-slate-600 min-h-20">
        {users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>
    </div>
  );
};

export default EffectCallAPI;
