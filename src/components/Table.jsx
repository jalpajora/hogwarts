import React from 'react';

import { TABLE } from './Table.constants';

export function Table({ type, children: tableBody }) {
  return (
    <div className="table-container">
      <table>
          <thead>
          <tr>
            {TABLE[type].HEADERS.map(th  => <th key={th.toLowerCase()}>{th}</th>)}
          </tr>
          </thead>
          <tbody>
            {tableBody}
          </tbody>
      </table>
    </div>
  );
};
