import { useState, useEffect } from 'react';

export default function fetchData(type, options = { page: 1, name: '' }) {
  const [data, setData] = useState({ info: { pages: 0 }, results: [] });

  useEffect(() => {
    const fetchData = async () => {
      const requestLink =
        options.page != -1
          ? `https://rickandmortyapi.com/api/${type}/?page=${options.page}`
          : `https://rickandmortyapi.com/api/${type}/?name=${options.name}`;

      try {
        const response = await fetch(requestLink);
        const json = await response.json();
        if (json.error) setData({ info: { pages: 0 }, results: [] });
        else setData(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [type, options.page, options.name]);

  return [data.results, data.info.pages];
}
