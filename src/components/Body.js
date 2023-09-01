import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import {Link} from "react-router-dom";

const Body = () => {
  //const searchTxt ="KFC";
  const [searchText, setSearchText] = useState(""); //To create state variable
  const [restaurants, setRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.968015668889347&lng=77.58034006995832&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    setRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // console.log("render");
  if (!restaurants) return null; //Not Render Components(Early Return)

  // if (filteredrestaurants?.length===0){
  //   return<h1>No Restaurants..</h1>
  // }

  //Conditional Rendering
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need  to filter the data
            //filterData
            const data = filterData(searchText, restaurants);
            //update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>

        {/* afte r search btn clicked it re-renders this whole and ui is updated  */}
        <div className="restaurant-list">
          {/* write the code for no restaurants when no res match */}

          {filteredrestaurants.map((restaurant) => {
            return (
              <Link  key={restaurant?.info?.id} to={"/restaurant/"+ restaurant?.info?.id}><RestaurantCard {...restaurant?.info}/> </Link> 
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
