import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SearchedPuppies({ players }) {
  let { searchTerm } = useParams();
  searchTerm = searchTerm.toLowerCase();

  let searchedPlayerArray = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm)
  );

  console.table(searchedPlayerArray);
  return (
    <>
      <h2>You searched for: {searchTerm}</h2>
      <h2>Your results:</h2>
      <div className="puppy-list">
        {searchedPlayerArray.map((player) => (
          <SearchedPlayer key={player.id} player={player} />
        ))}
      </div>
      <Link to={`/`}>
        <button>Go Back Home</button>
      </Link>
    </>
  );
}

function SearchedPlayer({ player, removePlayer }) {
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
      </div>
    </>
  );
}

export default SearchedPuppies;
