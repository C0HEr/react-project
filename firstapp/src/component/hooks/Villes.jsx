import React, { useState } from "react";

function Villes() {
  const [villes, setVlille] = useState([
    { id: 1, name: "Agadir" },
    { id: 2, name: "Fes" },
    { id: 3, name: "Taroudant" },
  ]);
  const [newVille, setNewVille] = useState("");

  const ajouterVille = (e) => {
    e.preventDefault();

    newVille &&
      setVlille([
        ...villes,
        {
          id: villes.length + 1,
          name: newVille,
        },
      ]);
    setNewVille("");
  };

  const removeVille = (id) => {
    setVlille((villes) => {
      return villes.filter((villes) => villes.id !== id);
    });
  };

  const handelChange = (e) => {
    setNewVille(e.target.value);
  };

  const updateVille = (e, ville) => {
    if (e.target.innerText === "Update") {
      setNewVille(ville.name);
      e.target.innerText = "Save";
    } else {
      setVlille((villes) => {
        return villes.map((item) =>
          item.id === ville.id ? { ...item, name: newVille } : item
        );
      });
      e.target.innerText = "Update";
      setNewVille("");
    }
  };

  return (
    <div>
      <h1>Liste des villes</h1>
      <form action="post" onSubmit={(e) => ajouterVille(e)}>
        <input type="text" value={newVille} onChange={(e) => handelChange(e)} />
        <button type="submit">Ajouter ville</button>
      </form>
      <ul>
        {villes.map((ville) => (
          <li key={ville.id}>
            <b>{ville.name}</b>
            <button onClick={() => removeVille(ville.id)}>Delete</button>
            <button onClick={(e) => updateVille(e, ville)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Villes;
