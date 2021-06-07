import { useState, useEffect } from 'react';

export default function useData(type, options = { default: true }) {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/${type}${options.default ? '/1,2,3,4,5' : ''}`)
      .then(response => response.json())
      .then(data => setData(options.default ? { results: data } : data))
      .catch(err => {
        console.error(err);
      });
    console.log(data);
  }, [type]);

  return data.results;
}
