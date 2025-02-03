import React from "react";
import PuppyList from "../components/PuppyList/PuppyList";
import SearchBar from "../components/SearchBar/SearchBar";
import CreatePlayer from "../components/CreatePlayer/CreatePlayer";

function Home() {
  return (
    <>
      <SearchBar />
      <PuppyList />
      <CreatePlayer />
    </>
  );
}

export default Home;
