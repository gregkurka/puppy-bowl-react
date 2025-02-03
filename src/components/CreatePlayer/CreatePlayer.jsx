import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT";

import "./CreatePlayer.css";

const addNewPlayer = async (playerObj, players, setPlayers) => {
  axios
    .post(
      "https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players",
      playerObj
    )
    .then((response) => {
      console.log("you done added a dog!");

      setPlayers([...players, response.data.data.newPlayer]);
    })
    .catch((error) => {
      console.error(error);
    });
};

function CreatePlayer({ players, setPlayers }) {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNewPlayer(formData, players, setPlayers);
    setFormData({
      name: "",
      breed: "",
      imageUrl: "",
    });
  };

  return (
    <form id="new-player-form" onSubmit={handleSubmit}>
      <h2>Add New Puppy</h2>
      <div className="form-row">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="breed">Breed: </label>
        <input
          type="text"
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Puppy</button>
    </form>
  );
}

export default CreatePlayer;
