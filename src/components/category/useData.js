import { useState, useEffect } from 'react';

export default function useData(type, options = { default: true, name: '' }) {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    const defaultRequest = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/${type}/1,2,3,4,5`);
        const json = await response.json();
        setData({ results: json });
      } catch (err) {
        console.error(err);
      }
    };

    const namedRequest = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/${type}/?name=${options.name}`);

        const json = await response.json();
        setData(json);
      } catch (err) {
        console.log(err);
      }
    };

    if (options.default) defaultRequest();
    else namedRequest();
  }, [type, options.default, options.name]);

  return data.results;
}
