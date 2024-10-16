import { Fragment } from "react";
import { FaHeart, FaRocket } from "react-icons/fa";
import privateImage from "../assets/images/hinh-2.png";

const Profile = () => {
  const name: string = "Nhan";
  const age: number = 36;
  return (
    <Fragment>
      <FaHeart />
      <FaRocket />
      <img src="./images/hinh-1.png" alt="" />
      <img src={privateImage} alt="" />
      <p>Toi ten la: {name}</p>
      <p>Toi duoc: {age} tuoi</p>
    </Fragment>
  );
};

export default Profile;
