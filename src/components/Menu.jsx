export default function Menu() {
  const handleClick = (e) => {
    console.log("Je clique sur categories", e);
  };

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  };

  return (
    <div className="filter">
      <h2>Filtres</h2>
      <input
        type="button"
        onClick={handleClick}
        className="categories"
        value="Catégories"
      ></input>
      <button onClick={(e) => handleClickAgain("mario", e)}>
        Click me again
      </button>
    </div>
  );
}
