import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);

  function handleSubmit() {
    if (!name) return;
    const newHog = {
      name,
      weight: parseFloat(weight) || 0,
      specialty,
      greased,
      "highest medal achieved": "none",
      image: "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
    };
    onAddHog(newHog);
    setName("");
    setWeight("");
    setSpecialty("");
    setGreased(false);
  }

  return (
    <div className="ui form" style={{ margin: "2em auto", maxWidth: "400px", textAlign: "left" }}>
      <h2>Add a New Hog</h2>
      <div className="field">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="specialty">Specialty:</label>
        <input
          id="specialty"
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="greased">Greased?</label>
        <input
          id="greased"
          type="checkbox"
          checked={greased}
          onChange={(e) => setGreased(e.target.checked)}
        />
      </div>
      <button className="ui primary button" onClick={handleSubmit}>
        Add Hog
      </button>
    </div>
  );
}

export default HogForm;
