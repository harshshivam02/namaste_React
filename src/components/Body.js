import Restaurant_card from "./Restaurant_card";

import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";

const Body = () => {
  const [listofrestraunts, setlistofrestraunts] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchText, setSearchText] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  fetchData = async () => {
    const response = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9063886&lng=77.8374766&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    
    const data = await response.json();
    console.log(data);
    console.log(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setlistofrestraunts(
      //optional chaining
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchList(
      //optional chaining
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional rendering of the cards list
  // if (listofrestraunts.length === 0) {
  //    return  <Shimmer />;
  // }
  return listofrestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredlist = listofrestraunts.filter((res) =>
              res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setSearchList(filteredlist);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listofrestraunts.filter(
              (res) => res.info.avgRating > 4.3
            );
            setSearchList(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {searchList.map((restaurant) => (
          <Restaurant_card key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* <Restaurant_card resData={resObj[0]} /> */}
      </div>
    </div>
  );
};
export default Body;
