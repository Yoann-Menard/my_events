import { Link } from "react-router-dom";

const EventList = (props) => {
  const events = props.events;

  return (
    <div className="event-list">
      {events.map((event) => (
        <div className="event-preview" key={event.id}>
          <h1 style={{ color: "purple" }}>{event.metas.title}</h1>
          <h2 style={{ textDecoration: "underline" }}>{event.datasetid}</h2>
          <p style={{ backgroundColor: "cyan" }}>{event.metas.publisher}</p>
          <hr />
          <button type="button" className="learnmore">
            <Link to={`/event/${event}`}>En savoir +</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
