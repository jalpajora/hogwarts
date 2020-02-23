import { API } from '../@constants/api';
import { transformResponse } from '../@helpers/formatter';

export const fetchHouses = async () => {
  const response = await fetch(`${API.URL}/houses?key=${API.KEY}`)
    .then(res => transformResponse(res, 'ERROR: Fetching houses'))
    .catch(console.error);

  return response;
};

export const fetchSpells = async () => {
  const response = await fetch(`${API.URL}/spells?key=${API.KEY}`)
    .then(res => transformResponse(res, 'ERROR: Fetching spells'))
    .catch(console.error);

  return response;
};

export const fetchHouse = async () => {
  const response = await fetch(`${API.URL}/sortingHat`)
    .then(res => transformResponse(res, 'ERROR: Sorting hat'))
    .catch(console.error);

  return response;
};

export const fetchCharacters = async (house) => {
  const response = await fetch(`${API.URL}/characters?key=${API.KEY}&house=${house}`)
    .then(res => transformResponse(res, 'ERROR: Fetching characters'))
    .catch(console.error);

  return response
}
