import React, { Fragment } from 'react';

import { Table } from './Table';
import { useHouseCharacters, capitalizeLetters } from '../@helpers';

export function House({ house }) {
  const characters = useHouseCharacters(house);

  return (
    <Fragment>
      <h2>House of {capitalizeLetters(house)}</h2>
      <Table type="HOUSE">
        {characters.map(character => 
          <tr key={character._id}>
            <td>
              <div>{character.name}</div>
              {character.alias && <div>"{character.alias}"</div>}
            </td>
            <td>{character.school || 'n/a'}</td>
            <td>
              <ul>
                {character.role && <li>{capitalizeLetters(character.role)}</li>}
                {character.deathEater && <li>Death Eater</li>}
                {character.ministryOfMagic && <li>Ministry of Magic</li>}
                {character.orderOfThePhoenix && <li>Order of the Phoenix</li>}
                {character.dumbledoresArmy && <li>Dumbledores Army</li>}  
              </ul>
            </td>
            <td>{character.boggart}</td>
            <td>{character.wand}</td>
          </tr>
        )}
      </Table>
    </Fragment>
  );
};
