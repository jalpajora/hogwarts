import React from 'react';

import { Table } from './Table';
import { useHouses } from '../@helpers';

export function Houses() {
  const houses = useHouses();

  return (
    <Table type="HOUSES">
      {houses.map(house => 
        <tr key={house._id}>
          <td>{house.name}</td>
          <td>{house.founder}</td>
          <td>{house.values.join(', ')}</td>
          <td>{house.mascot}</td>
          <td>{house.colors.join(', ')}</td>
        </tr>
      )}
    </Table>
  );
};
