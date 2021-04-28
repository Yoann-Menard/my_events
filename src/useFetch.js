import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error('Failed to fetch');
        }
        return res.json();
      })
      .then((response) => {
        setData(response.datasets);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          document.querySelector('h2').innerHTML = 'Fetch aborted!';
        } else {
          setIsLoading(false);
          setError(error.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
