import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [catalog, setCatalog] = useState(null);

  let content = null;

  useEffect(() => {
    fetch(`https://opendata.paris.fr/api/v2/catalog${catalog}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response.datasets);
        setCatalog(response.datasets);
      })
      .catch((error) => console.log(error));
  }, [catalog]);

  if (catalog) {
    content = (
      <div>
        <h1>{catalog.data}</h1>
      </div>
    );

    return <div>{content}</div>;
  }
}
