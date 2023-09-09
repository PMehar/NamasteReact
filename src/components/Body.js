import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline"
const Body = ({user}) => {
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

  const isOnline = useOnline();

  if(!isOnline){
    return (<h1>🔴offline, please check your internet Connection!!</h1>)
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
      <div className="search-container p-5 my-5">
        
        <input
          type="text"
          className="search-input p-2 m-2 border border-black rounded-lg focus:bg-green-100"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn p-2 m-1 bg-purple-400 hover:bg-purple-800 rounded-lg text-white"
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
      </div>

        {/* afte r search btn clicked it re-renders this whole and ui is updated  */}
        <div className="restaurant-list flex flex-wrap">
          {/* write the code for no restaurants when no res match */}

          {filteredrestaurants.map((restaurant) => {
            return (
              <Link  to={"/restaurant/"+ restaurant?.info?.id}  key={restaurant?.info?.id}><RestaurantCard {...restaurant?.info} user={user}/> </Link> 
            );
          })}
        </div>
    </>
  );
};

export default Body;
