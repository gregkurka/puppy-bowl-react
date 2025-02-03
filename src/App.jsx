import Home from "./Pages/Home";
import Details from "./Pages/Details";
import SearchedPuppies from "./Pages/SearchedPuppies";
import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [playersFromPuppyList, setPlayersFromPuppyList] = useState([]);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home setGlobalPuppyList={setPlayersFromPuppyList} />}
        />
        <Route path="/players/:id" element={<Details />} />
        <Route
          path="/SearchedPuppies/:searchTerm"
          element={<SearchedPuppies players={playersFromPuppyList} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
