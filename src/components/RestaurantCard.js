import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import userContext from "../utils/UserContext";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  const {user} = useContext(userContext);
  return (
    <div className="card w-56 p-2 m-2 shadow-2xl">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      {/* <h4>{user.name}</h4> */}
      <h4 className="font-bold">{user.name} - {user.email}</h4>
    </div>
  );
};

export default RestaurantCard;
