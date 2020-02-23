import { useEffect, useState } from 'react';

import { fetchSpells } from './api';

export const useSpells = () => {
  const [spells, updateSpells] = useState([])

  useEffect(() => {
    fetchSpells()
      .then(spells => updateSpells(spells))
      .catch(err => console.log(err));

    return () => {}
  }, [])

  return spells;
};
