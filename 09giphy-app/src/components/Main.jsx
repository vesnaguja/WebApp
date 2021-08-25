import React, { useState } from "react";
import Search from "./Search";
import DisplayGifs from "./DisplayGifs";
import { getGifs } from "../services/giphyService";

const Main = () => {
  const [gifList, setGifList] = useState([]);

  const onEnter = (e) => {
    
    if (e.key === "Enter") {
      e.preventDefault();
      const searchedString = e.target.value.trim().toLowerCase();
      getGifs(searchedString).then((data) => {
        setGifList(data);
      });
    }
  };

  return (
    <>
      <h2 className="pt-5 mt-3 text-secondary text-center">Search Giphy</h2>
      <Search onKeyDown={onEnter} />
      <DisplayGifs gifs={gifList} />
    </>
  );
};

export default Main;
