import React, { useEffect, useState } from "react";
import axios from "axios";
import CreatePlayer from "../CreatePlayer/CreatePlayer";
import SearchBar from "../SearchBar/SearchBar";

import { Link } from "react-router-dom";

import "./PuppyList.css";

function PuppyList({ setGlobalPuppyList }) {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios("https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players")
      .then((data) => {
        setPlayers(data.data.data.players);
        setGlobalPuppyList(data.data.data.players);
      })
      .catch((err) => console.error(err));
  }, []);

  const removePlayer = async (playerId) => {
    try {
      await axios.delete(
        `https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${playerId}`
      );
      setPlayers((players) =>
        players.filter((player) => player.id !== playerId)
      );
    } catch (err) {
      console.error(`Whoops, trouble removing player #${playerId}!`, err);
    }
  };

  return (
    <>
      <SearchBar players={players} />
      <div className="puppy-list">
        {players.map((player) => (
          <Player key={player.id} player={player} removePlayer={removePlayer} />
        ))}
      </div>
      <CreatePlayer players={players} setPlayers={setPlayers} />
    </>
  );
}

function Player({ player, removePlayer }) {
  return (
    <>
      <div className="card">
        <ul>
          <li>Name: {player.name}</li>
          <li>Breed: {player.breed}</li>
          <li>Id: {player.id}</li>
          <li>
            <img
              src={player.imageUrl}
              alt={player.name}
              className="puppy-picture"
            />
          </li>
        </ul>
        <Link to={`/players/${player.id}`}>
          <button>See Details</button>
        </Link>

        <button onClick={() => removePlayer(player.id)}>Remove Player</button>
      </div>
    </>
  );
}

export default PuppyList;
