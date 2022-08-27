import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap';
import { useState, useEffect } from 'react';
import DisplayTable from '../components/DisplayTable';

const Report = () => {
  // const [sortedField, setSortedField] = useState(null);
  // const [direction, setDirection] = useState(1);
  const [requiredData, setRequiredData] = useState([
    { tickerName: 'abby', name: 'over', amount: '10', gain: '10', id: 1 },
    { tickerName: 'tobby', name: 'beef', amount: '100', gain: '100', id: 2 },
    { tickerName: 'xavier', name: 'ring', amount: '5', gain: '5', id: 3 },
    { tickerName: 'dog', name: 'destroyed', amount: '35', gain: '35', id: 4 },
    { tickerName: 'cat', name: 'monster', amount: '333', gain: '333', id: 5 }
  ]);
  const [direction2, setDirection2] = useState({
    id: true,
    tickerName: true,
    name: true,
    amount: true,
    gain: true
  });
console.log(direction2)
  //fetch data
  const [tradingData, setTradingData] = useState({
    tickerName: '',
    name: '',
    amount: '',
    gain: ''
  });

  // const sortingdirector = (field) => {
  //   console.log(sortedField);
  //   if (sortedField === null) {
  //     console.log('YES');
  //     setDirection(2);
  //   } else {
  //     if (sortedField === field) {
  //       setDirection(direction + 1);
  //     } else {
  //       setDirection(1);
  //     }
  //     setSortedField(field);
  //   }
  // };

  const sort_by = (field, reverse, primer) => {
    const key = primer
      ? function (x) {
          return primer(x[field]);
        }
      : function (x) {
          return x[field];
        };

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
      return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
    };
  };

  const sortingMachine = (data, theme) => {
    if (theme === 'tickerName' || theme === 'name') {
      requiredData.sort(
        sort_by(theme, direction2.theme, function (a) {
          return a.toUpperCase();
        })
      );
      setDirection2({ theme: !direction2.theme });
    } else {
      requiredData.sort(sort_by(theme, direction2.theme, parseInt));
      setDirection2({ theme: !direction2.theme });
    }
  };
  // setRequiredData(data);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => {
                sortingMachine(requiredData, 'id');
              }}
            >
              Number
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => {
                sortingMachine(requiredData, 'tickerName');
              }}
            >
              Ticker Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => {
                sortingMachine(requiredData, 'name');
              }}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => {
                sortingMachine(requiredData, 'amount');
              }}
            >
              Amount ($)
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => {
                sortingMachine(requiredData, 'gain');
              }}
            >
              $Gain
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {requiredData &&
          requiredData.map((rowData, index) => (
            <DisplayTable rowData={rowData} index={index} key={rowData.id} />
          ))}
      </tbody>
    </Table>
  );
};

export default Report;
