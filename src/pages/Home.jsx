import axios from "axios";
import React, { useEffect, useState } from "react";
import homeImage from "../assets/home.png"
function Home() {
  const APP_ID = "8e15aab2";
  const APP_KEY = "52866a9b7a13b82cc9e43c84b04de877";
  const [query, setQuery] = useState("");
  const BaseURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const axiosFunc = async () => {
    axios.get(BaseURL).then((res) => {
      // setQuery(data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    axiosFunc();
  }, [])
  

  const handleClick = () => {
    axiosFunc();
  };


  return (
    <div className="home">
      <h1>Food App</h1>
      <nav className="searchBar">
        <input type="text" placeholder="Search" autoFocus />
        <button className="btn-grad" onClick={handleClick}>Search</button>
        <select>
          <option value="">Breakfast</option>
          <option value="">Lunch</option>
          <option value="">Snack</option>
          <option value="">Teatime</option>
        </select>
      </nav>

      <img src={homeImage} alt="" className="homeImage"/>
    </div>
  );
}

export default Home;
