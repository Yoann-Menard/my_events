import { useState } from "react";
import useFetch from "../useFetch";

const Event = () => {
  const [dataset] = useState(1);
  const { data: event, error, isLoading } = useFetch(
    `https://opendata.paris.fr/api/datasets/1.0/search/?q=${dataset}`,
  );
  return (
    <div className="event-details">
      {isLoading && <div>Chargement...</div>}
      {error && <div>{error}</div>}
      {event && (
        <article>
          <h2>{event.dataset.metas.title}</h2>
          <p>{event.dataset.metas.publisher}</p>
          <div>{event.dataset.datasetid}</div>
        </article>
      )}
    </div>
  );
};
export default Event;
