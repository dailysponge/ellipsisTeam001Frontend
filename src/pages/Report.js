import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap';
import { useState, useEffect } from 'react';
import DisplayTable from '../components/DisplayTable';

const Report = () => {
  const [sortedField, setSortedField] = useState(null);
  const [direction, setDirection] = useState(1);
  const dummyData3 = [
    { tickerName: 'yo', name: 'yo', amount: '10', gain: '10', id: 1 },
    { tickerName: 'LOL', name: 'LOL', amount: '20', gain: '20', id: 2 }
  ];
     
  
  useEffect(() => {
    sortingMachine(dummyData3)
    console.log(dummyData3)
  }, [direction, sortedField]);

 

  //fetch data
  const [tradingData, setTradingData] = useState({
    tickerName: '',
    name: '',
    amount: '',
    gain: ''
  });

  const sortingdirector = (field) => {
    if (sortedField === field) {
      setDirection(direction + 1);
    } else {
      setDirection(1);
    }
    setSortedField(field);
  };



  const sortingMachine = (data) => {
    if (sortedField === 'tickerName' || sortedField === 'name') {
      if (direction % 2 === 1) {
        return data.sort((a, b) => (a[sortedField] > b[sortedField] ? 1 : -1));
      } //odd is acsending
      else {
        return data.sort((a, b) => (a[sortedField] < b[sortedField] ? 1 : -1));
      } //even is descending
    } else {
      console.log('sorting number');
      if (direction % 2 === 1) {
        data.sort((a, b) => {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        });
      } else {
        data.reverse();
      }
    }
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => {
                setSortedField('number');
                sortingdirector('number');
                // sortingMachine(dummyData3);
              }}
            >
              Number
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => {
                setSortedField('tickerName');
                sortingdirector('tickerName');
                // sortingMachine(dummyData3)
              }}
            >
              Ticker Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => {
                setSortedField('name');
                sortingdirector('name');
                // sortingMachine(data)
              }}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => {
                setSortedField('amount');
                sortingdirector('amount');
                // sortingMachine(data)
              }}
            >
              Amount ($)
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => {
                setSortedField('gain');
                sortingdirector('gain');
                // sortingMachine(data)
              }}
            >
              $Gain
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {dummyData3 && dummyData3.map((rowData, index) => (
           <DisplayTable rowData={rowData} index={index} key={rowData.id}/>
        ))}
      </tbody>
    </Table>
  );
};

export default Report;
