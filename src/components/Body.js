import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer"

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText)
  );
  return filterData;
}
const Body = () => {
  //const searchTxt ="KFC";
  const [searchText, setSearchText] = useState(""); //To create state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  useEffect(()=>{
    getRestaurants();
  },[]);  

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

  }
 
  console.log("render"); 
  if(!allRestaurants) return null;//Not Render Components(Early Return)

  // if (filteredrestaurants?.length===0){
  //   return<h1>No Restaurants..</h1>
  // }
  
  //Conditional Rendering 
  return(allRestaurants.length ===0)?<Shimmer/>:(
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
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>

        {/* after search btn clicked it re-renders this whole and ui is updated  */}
        <div className="restaurant-list">
          {/* write the code for no restaurants when no res match */}
       
          {filteredrestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
