import { useState } from "react";

export default function Menu() {
  const [categorie, setCategorie] = useState();

  const handleClick = (e) => {
    setCategorie(categorie);
    console.log(categorie);
    console.log("Je clique sur categorie", e);
  };

  return (
    <div className="filter">
      <h2>Filtres</h2>
      <option
        onClick={handleClick}
        className="categories"
        value="Catégories"
      ></option>
    </div>
  );
}
