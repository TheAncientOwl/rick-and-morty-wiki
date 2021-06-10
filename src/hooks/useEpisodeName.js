import { useState } from 'react';

export default function useEpisodeName(url) {
  const [name, setName] = useState('loading...');

  const findName = async () => {
    //console.log('[>>] Fetching episode name.');
    try {
      const response = await fetch(url);
      const json = await response.json();
      setName(json.name);
    } catch (err) {
      console.error(err);
    }
    //console.log('[>>] Fetched episode name.');
  };

  findName();

  return name;
}
