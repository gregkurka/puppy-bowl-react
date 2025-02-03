import React from "react";

function CreatePlayer() {
  return (
    <form id="new-player-form">
      <h2>Add New Puppy</h2>
      <div class="form-row">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div class="form-row">
        <label for="breed">Breed:</label>
        <input type="text" id="breed" name="breed" required />
      </div>
      <div class="form-row">
        <label for="breed">Image URL:</label>
        <input type="text" id="imageUrl" name="imageUrl" required />
      </div>
      <button type="submit">Add Puppy</button>
    </form>
  );
}

export default CreatePlayer;
