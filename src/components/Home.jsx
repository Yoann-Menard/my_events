import { useState } from 'react';
import useFetch from '../useFetch';
import EventList from './EventList';
import Menu from './Menu';
import Facebook from './Facebook';

const Home = () => {
  const [dataset, setDataset] = useState(1);
  const [datasetHistory] = useState([]);
  const [input, setInput] = useState('');

  const loadMoreDataset = () => {
    setDataset(dataset + 1);
  };

  const search = (input) => {
    setInput(input);
  };

  const {
    error,
    isLoading,
    data: events,
  } = useFetch(
    `https://opendata.paris.fr/api/datasets/1.0/search/?q=${dataset}`,
  );
  return (
    <div className='home'>
      <div className='Facebook-title'>
        <Facebook />
        <Menu search={search} />
        {error && <div>{error}</div>}
        {isLoading && <div>Chargement...</div>}
        <h2>Events à venir</h2>
        {datasetHistory.length === 0 && (
          <button onClick={loadMoreDataset}>Charger plus d'éléments</button>
        )}
        {events && <EventList events={events} input={input} />}
      </div>
    </div>
  );
};

export default Home;
