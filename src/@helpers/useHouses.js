import { useEffect, useState } from 'react';

import { fetchHouses } from './api';

export const useHouses = () => {
  const [houses, updateHouses] = useState([])

  useEffect(() => {
    fetchHouses()
      .then(houses => updateHouses(houses))
      .catch(err => console.log(err));

    return () => {}
  }, [])

  return houses;
};
