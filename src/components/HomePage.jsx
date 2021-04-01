import React, { useState, useEffect } from "react";
import { layoutGenerator } from "react-break";

export default function HomePage() {
  const [dataset, setDataset] = useState(1);
  const [datasetHistory, setDatasetHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMoreDataset = () => {
    setDataset(dataset + 1);
  };

  useEffect(() => {
    fetch(`https://opendata.paris.fr/api/datasets/1.0/search/?q=${dataset}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response.datasets);
        setDatasetHistory(response.datasets);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [dataset]);

  return (
    <div>
      <h1>opendata paris API</h1>
      <br />
      {isLoading && <p>Chargement...</p>}

      {datasetHistory.length !== 0 && (
        <button onClick={loadMoreDataset}>Charger plus d'éléments</button>
      )}

      {datasetHistory.map((d, index) => (
        <div key={index}>
          {d.datasetid && (
            <>
              <div>
                <h2 style={{ textDecoration: "Underline" }}>{d.datasetid}</h2>
                <h3 style={{ backgroundColor: "grey" }}>{d.metas.publisher}</h3>
                <h4 style={{ color: "red" }}>{d.metas.title}</h4>
              </div>
              <hr />
              <br />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
