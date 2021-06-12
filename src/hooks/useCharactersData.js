import { useState, useEffect } from 'react';
import { INVALID_PAGE } from '../App';

export default function useCharactersData(options = { page: 1, name: '' }) {
  const [data, setData] = useState({ info: { pages: 0 }, results: [] });

  useEffect(() => {
    const fetchData = async () => {
      const requestLink =
        options.page != INVALID_PAGE
          ? `https://rickandmortyapi.com/api/character/?page=${options.page}`
          : `https://rickandmortyapi.com/api/character/?name=${options.name}`;

      try {
        const response = await fetch(requestLink, { method: 'GET', mode: 'cors' });
        const json = await response.json();
        if (json.error) setData({ info: { pages: 0 }, results: [] });
        else setData(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [options.page, options.name]);

  return [data.results, data.info.pages];
}
