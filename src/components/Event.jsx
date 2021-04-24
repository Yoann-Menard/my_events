import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Event = () => {
  const { id } = useParams();
  const [myEvents, setmyEvents] = useState({});

  fetch(`https://opendata.paris.fr/api/datasets/1.0/${id}`)
    .then((data) => data.json())
    .then((data) => setmyEvents(data));

  return (
    <div className='myevents-details'>
      {myEvents && (
        <article className='article-preview'>
          <h2 style={{ color: 'purple' }}>{myEvents?.metas.title}</h2>
          <p style={{ color: 'blue' }}>{myEvents?.metas.publisher}</p>
          <div style={{ color: 'green' }}>{myEvents?.datasetid}</div>
        </article>
      )}
    </div>
  );
};

export default Event;
