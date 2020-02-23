import React from 'react';

import { Table } from './Table';
import { useSpells } from '../@helpers';

export function Spells() {
  const spells = useSpells();

  return (
    <Table type="SPELLS">
      {spells.map(spell => 
        <tr key={spell._id}>
          <td>{spell.spell}</td>
          <td>{spell.effect}</td>
          <td>{spell.type}</td>
        </tr>
      )}
    </Table>
  );
};
