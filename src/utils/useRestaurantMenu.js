import { useState, useEffect } from "react";
import { MENU_API } from "../config";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  //get data from api
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    //console.log(json.data);
    setRestaurant(json?.data);
  }
  //return restaurant data
  return restaurant;
};

export default useRestaurantMenu;
