import { useState } from "react";
import EventList from "./EventList";
import useFetch from "../useFetch";
import Menu from "./Menu";
import Facebook from "./Facebook";
// import { Media } from "react-breakpoints";

export default function Home() {
  const [dataset, setDataset] = useState(1);
  const [datasetHistory] = useState([]);

  const loadMoreDataset = () => {
    setDataset(dataset + 1);
  };

  const { error, isLoading, data: events } = useFetch(
    `https://opendata.paris.fr/api/datasets/1.0/search/?q=${dataset}`,
  );

  return (
    <div className="home">
      <div className="Facebook-title">
        <p>Pour commencer, connectez-vous à votre compte Facebook</p>
        <Facebook />
        <Menu />
        {error && <div>{error}</div>}
        {isLoading && <div>Chargement...</div>}
        <h2>Events à venir</h2>
        {datasetHistory.length === 0 && (
          <button onClick={loadMoreDataset}>Charger plus d'éléments</button>
        )}
        {events && <EventList events={events} />}
      </div>
    </div>
  );
}
