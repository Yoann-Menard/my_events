import React, { useState, useEffect } from "react";

export default function ApiTest() {
  const [page, setPage] = useState(1);
  const [commitHistory, setCommitHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMoreCommit = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(
      `https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview",
        }),
      },
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response.items);
        setCommitHistory(response.items);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <div>
      <h1> Test de l'API Github commit search </h1>
      {isLoading && <p>Chargement...</p>}

      {commitHistory.length !== 0 && (
        <button onClick={loadMoreCommit}>Charger plus de commits</button>
      )}

      {commitHistory.map((c, index) => (
        <div key={index}>
          {c.commit && (
            <>
              <div>
                <h2 style={{ textDecoration: "Underline" }}>
                  {c.commit.committer.name}
                </h2>
                <h2>{c.commit.committer.email}</h2>
                <p>{c.commit.message}</p>
              </div>
              <hr />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
