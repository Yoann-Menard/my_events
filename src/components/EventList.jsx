import { Link } from 'react-router-dom';

const EventList = (props) => {
  let events = props.events;
  events = events.filter((input) => {
    if (
      input.metas.title.toLowerCase().search(props.input.toLowerCase()) !== -1
    )
      return true;
    return false;
  });

  return (
    <div className='event-list'>
      {events.map((event) => (
        <div className='event-preview' key={event?.datasetid}>
          <h1 style={{ color: 'purple' }}>{event?.metas.title}</h1>
          <button type='button' className='learnmore'>
            <Link to={`/event/${event.datasetid}`}>En savoir +</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
