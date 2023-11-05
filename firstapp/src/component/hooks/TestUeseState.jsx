import React, { useState } from "react";

function TestUeseState() {
  const [count, setCount] = useState(0),
    [title, setTitle] = useState("Comprendre UseState");

  const handleCount = () => {
    setCount(count + 1);
  };
  const handleTitre = () => {
    setTitle("Comprendre Hooks");
  };

  return (
    <div>
      <h1>Titre : {title} </h1>
      <h2>count : {count}</h2>
      <button onClick={() => handleCount()}>Incrimenter</button>
      <button onClick={() => handleTitre()}>Change Titre</button>
    </div>
  );
}

export default TestUeseState;
