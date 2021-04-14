import { useState } from "react";

export default function Menu() {
  const [categorie, setCategorie] = useState();
  const [lieu, setLieu] = useState();

  const handleClick = (e) => {
    setCategorie(categorie);
    console.log(categorie);
    console.log("Je clique sur categorie", e);
  };

  const handleInput = (e) => {
    setLieu(lieu);
    console.log(lieu);
    console.log("J'écris dans l'input", e);
  };
  return (
    <div className="filter">
      <h2>Filtres</h2>
      <button onClick={handleClick} className="categories" value="Catégories">
        Catégories
      </button>
      <input onChange={handleInput} className="Lieu" placeholder="Lieu"></input>
    </div>
  );
}
