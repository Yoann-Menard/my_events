import { useState } from 'react';

const Menu = (props) => {
  const [categorie, setCategorie] = useState();
  const [lieu, setLieu] = useState();

  const handleClick = (e) => {
    setCategorie(categorie);
    console.log(categorie);
    console.log('Je clique sur categorie', e);
  };

  const handleInput = (e) => {
    setLieu(lieu);
    props.search(e.target.value);
  };

  return (
    <div className='filter'>
      <h2>Filtres</h2>
      <button onClick={handleClick} className='categories' value='Catégories'>
        Catégories
      </button>
      <input onChange={handleInput} className='Lieu' placeholder='Lieu'></input>
    </div>
  );
};

export default Menu;
