import React from 'react';

function DisplayTable({rowData, index}) {
  return (
    <tr>
      <td>{rowData.id}</td>
      <td>{rowData.tickerName}</td>
      <td>{rowData.name}</td>
      <td>{rowData.amount}</td>
      <td>{rowData.gain}</td>
    </tr>
  );
}

export default DisplayTable;
