import React from "react";
import PuppyList from "../components/PuppyList/PuppyList";

function Home({ setGlobalPuppyList }) {
  return (
    <>
      <PuppyList setGlobalPuppyList={setGlobalPuppyList} />
    </>
  );
}

export default Home;
