import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h2>Désolé</h2>
      <p>Une erreur inattendu s'est produite</p>
      <Link to="/home">Retourner sur la page d'accueil...</Link>
    </div>
  );
};

export default NotFound;
