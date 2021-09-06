import React, { useState } from "react";
import Search from "./Search";
import DisplayGifs from "./DisplayGifs";

const Main = () => {
  const [gifList, setGifList] = useState([]);

  const updateGifListHandler = (value) => {
    setGifList(value);
  }


  return (
    <>
      <h2 className="pt-5 mt-3 text-secondary text-center">Search Giphy</h2>
      <Search updateGifListHandler={updateGifListHandler} />
      <DisplayGifs gifs={gifList} />
    </>
  );
};

export default Main;
