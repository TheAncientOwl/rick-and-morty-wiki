import { useState } from 'react';

export default function useEpisodeName(url) {
  const [name, setName] = useState('loading...');

  const findName = async () => {
    try {
      const response = await fetch(url, { method: 'GET', mode: 'cors' });
      const json = await response.json();
      setName(json.name);
    } catch (err) {
      console.error(err);
    }
  };

  findName();

  return name;
}
