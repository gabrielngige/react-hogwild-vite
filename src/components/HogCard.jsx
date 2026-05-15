import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleClick() {
    setShowDetails((prev) => !prev);
  }

  return (
    <div
      aria-label="hog card"
      className="ui card"
      style={{ margin: "1em", cursor: "pointer" }}
    >
      <div className="image" onClick={handleClick}>
        <img src={hog.image} alt={"Photo of " + hog.name} />
      </div>
      <div className="content" onClick={handleClick}>
        <h3 className="header">{hog.name}</h3>
        {showDetails && (
          <div className="description">
            <p>Specialty: {hog.specialty}</p>
            <p>{hog.weight}</p>
            <p>{hog.greased ? "Greased" : "Nongreased"}</p>
            <p>{hog["highest medal achieved"]}</p>
          </div>
        )}
      </div>
      <div className="extra content">
        <button
          className="ui button"
          onClick={(e) => {
            e.stopPropagation();
            onHide(hog.name);
          }}
        >
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;
