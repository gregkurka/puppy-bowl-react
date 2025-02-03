import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";

function SinglePlayerDisplay() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    axios(
      `https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${id}`
    )
      .then((data) => {
        setPlayer(data.data.data.player);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <h2>Details for {player?.name}</h2>
      <div className="card">
        <ul>
          <li>Name: {player?.name}</li>
          <li>Breed: {player?.breed}</li>
          <li>Id: {player?.id}</li>
          <li>Created Post: {player?.createdAt}</li>
          <li>Status: {player?.status}</li>
          <li>Team: {player?.teamId}</li>
          <li>
            <img
              src={player?.imageUrl}
              alt={player?.name}
              className="puppy-picture"
            />
          </li>
        </ul>
        <Link to={`/`}>
          <button>Go Back Home</button>
        </Link>
      </div>
    </>
  );
}

export default SinglePlayerDisplay;
