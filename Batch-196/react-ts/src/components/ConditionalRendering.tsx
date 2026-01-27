// const ConditionalRendering = () => {
//   const isShow = true;

//   if (isShow === true) {
//     return (
//       <div>
//         <h2>ConditionalRendering</h2>
//         <p>Danh sach user</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>ConditionalRendering</h2>
//     </div>
//   );
// };

//Cach 2: Su dung toan tu 3 ngoi
// const ConditionalRendering = () => {
//   const isShow = true;

//   return (
//     <div>
//       <h2>ConditionalRendering</h2>
//       {/* {isShow === true ? <p>Danh sach user</p> : ""} */}
//       {isShow ? <p>Danh sach user</p> : null}
//     </div>
//   );
// };

//Cach 3: Su dung toan tu AND &&
// const ConditionalRendering = () => {
//   const isShow = false;

//   return (
//     <div>
//       <h2>ConditionalRendering</h2>
//       {isShow && <p>Danh sach user</p>}
//     </div>
//   );
// };

enum Level {
  MEMBER = "member",
  SILVER = "silver",
  GOLD = "gold",
}

const ConditionalRendering = () => {
  const level: Level = Level.GOLD; //member | silver | gold

  let label = "Member";
  let percent = 0;
  if (level === Level.SILVER) {
    label = "Silver";
    percent = 5;
  } else if (level === Level.GOLD) {
    label = "Gold";
    percent = 10;
  }

  console.log("Render ConditionalRendering");

  return (
    <div>
      <h2>ConditionalRendering</h2>
      <p>
        {label}: {percent}%
      </p>
      {/* {level === "member" && <p>Member: 0%</p>}
      {level === "silver" && <p>Silver: 5%</p>}
      {level === "gold" && <p>Gold: 10%</p>} */}
    </div>
  );
};

export default ConditionalRendering;
