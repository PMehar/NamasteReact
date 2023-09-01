import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import { MENU_API } from "../config";

const RestaurantMenu = () => {
  // /*how to read a Dynamic url */
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json?.data);
  }

  if (restaurant == null) return <Shimmer />;

  const {
    name,
    cloudinaryImageId,
    areaName,
    city,
    avgRating,
    costForTwoMessage,
    cuisines,
  } = restaurant?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurant?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCards);
  return (
    <div>
      <div>
        <h4>Restaurant id:{resId}</h4>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
        <h4>
          {areaName} - {city}
        </h4>
        <h4>
          {costForTwoMessage} - {avgRating + " stars"}
        </h4>
        <h1>Menu</h1>
        <ul>
          {/* <li>{itemCards[0].card.info.name}</li> */}
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price/100|| item?.card?.info?.defaultPrice/100} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
