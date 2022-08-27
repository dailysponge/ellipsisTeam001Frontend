import React from 'react';

function DisplayTable({rowData, index}) {
  return (
    <tr>
      <td>{index+1}</td>
      <td>{rowData.tickerName}</td>
      <td>{rowData.name}</td>
      <td>{rowData.amount}</td>
      <td>{rowData.gain}</td>
    </tr>
  );
}

export default DisplayTable;
