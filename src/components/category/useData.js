import { useState, useEffect } from 'react';

export default function useData(type) {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/${type}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [type]);

  return data.results;
}
