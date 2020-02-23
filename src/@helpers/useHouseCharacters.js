import { useEffect, useState } from 'react';

import { fetchCharacters } from './api';

export const useHouseCharacters = (house) => {
  const [characters, updateCharacters] = useState([])

  useEffect(() => {
    fetchCharacters(house)
      .then(characters => updateCharacters(characters))
      .catch(err => console.log(err));

    return () => {}
  }, [house])

  return characters;
};
