import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap';
import { useState, useEffect } from 'react';
import DisplayTable from '../components/DisplayTable';
import { Container } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { apiRoutes } from '../api/apiRoutes';

const Report = () => {
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
  //fetch data
  const [tradingData, setTradingData] = useState({
    tickerName: '',
    name: '',
    amount: '',
    gain: ''
  });

  const { data, loading, error } = useFetch(apiRoutes.report + '/123456');
  let tableData = [];
  if (data && data.data && data.data.userAssetReport) {
    tableData = data.data.userAssetReport;
  }

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

  const sortingMachine = (e) => {
    let name = e.target.name;
    let currentValue = direction2[name];
    if (name === 'tickerName' || name === 'name') {
      requiredData.sort(
        sort_by(name, currentValue, function (a) {
          return a.toUpperCase();
        })
      );
    } else {
      requiredData.sort(sort_by(name, currentValue, parseInt));
    }
    setDirection2({
      id: true,
      tickerName: true,
      name: true,
      amount: true,
      gain: true
    });
    setDirection2((preValue) => {
      return { ...preValue, [name]: !currentValue };
    });
  };

  const arrowFunction = (field, theme) => {
    if (field === false) {
      return (
        <button className="up-arrow" name={theme} onClick={sortingMachine}>
          ↑
        </button>
      );
    } else {
      return (
        <button className="down-arrow" name={theme} onClick={sortingMachine}>
          ↓
        </button>
      );
    }
  };

  return (
    <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>
              <div className="box">
                Number
                {arrowFunction(direction2.id, 'id')}
              </div>
            </th>
            <th>
              <div className="box">
                Ticker Name
                {arrowFunction(direction2.tickerName, 'tickerName')}
              </div>
            </th>
            <th>
              <div className="box">
                Name
                {arrowFunction(direction2.name, 'name')}
              </div>
            </th>
            <th>
              <div className="box">
                Amount ($)
                {arrowFunction(direction2.amount, 'amount')}
              </div>
            </th>
            <th>
              <div className="box">
                $Gain
                {arrowFunction(direction2.gain, 'gain')}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map((rowData, index) => (
              <DisplayTable rowData={rowData} index={index} key={rowData.id} />
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Report;
