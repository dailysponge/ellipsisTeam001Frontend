import { Container, Form, Row } from 'react-bootstrap';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { useState } from 'react';

const Performance = () => {
  const fakePerformanceData = [
    { name: 'Day 01', user: 50000, index: 12 },
    { name: 'Day 02', user: 31572, index: 21 },
    { name: 'Day 03', user: 34202, index: 23 },
    { name: 'Day 04', user: 74109, index: 64 },
    { name: 'Day 05', user: 52932, index: 22 },
    { name: 'Day 06', user: 95205, index: 10 },
    { name: 'Day 07', user: 34780, index: 18 },
    { name: 'Day 08', user: 39847, index: 39 },
    { name: 'Day 09', user: 88118, index: 38 },
    { name: 'Day 10', user: 12084, index: 19 },
    { name: 'Day 11', user: 17457, index: 18 },
    { name: 'Day 12', user: 36307, index: 48 },
    { name: 'Day 13', user: 11967, index: 27 },
    { name: 'Day 14', user: 32211, index: 28 },
    { name: 'Day 15', user: 28452, index: 47 },
    { name: 'Day 16', user: 52479, index: 69 },
    { name: 'Day 17', user: 35649, index: 47 },
    { name: 'Day 18', user: 14752, index: 29 },
    { name: 'Day 19', user: 42306, index: 2 }
  ];
  const changePerformanceDataToPercent = (data) => {
    let firstDayUserValue = data[0].user;
    data.map((item, index) => {
      let percentageValue =
        ((item.user - firstDayUserValue) / firstDayUserValue) * 100;
      fakePerformanceData[index].user = percentageValue;
    });
  };
  changePerformanceDataToPercent(fakePerformanceData);
  const CustomPerformanceLineTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p style={{ margin: '0', padding: '0' }}>
            {payload[0].payload.name}
            <br />
            {payload.map((item, index) => {
              return (
                <>
                  {item.name} :
                  <span
                    style={{
                      color: item.value > 0 ? 'green' : 'red'
                    }}
                  >
                    {item.value.toFixed(2)}%
                  </span>
                  <br />
                </>
              );
            })}
          </p>
        </div>
      );
    }
  };

  let indexes = [];
  Object.keys(fakePerformanceData[0]).forEach((item) => {
    if (item !== 'name' && item !== 'user') {
      indexes.push(item);
    }
  });

  let selectedIndexes = [];

  const handleClick = (e) => {
    let name = e.target.name;
    if (selectedIndexes.includes(name)) {
      let nameIndex = selectedIndexes.indexOf(name);
      selectedIndexes.splice(nameIndex, 1);
    } else {
      selectedIndexes.push(name);
    }
  };

  return (
    <Container>
      <Row>
        <div className="performance-chart dash-element">
          <h3>Performance</h3>
          <ResponsiveContainer height={800}>
            <LineChart
              data={fakePerformanceData}
              margin={{ top: 10, right: 10, left: 15, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(tick) => `${tick}%`} />
              <Tooltip content={<CustomPerformanceLineTooltip />} />
              <Line type="monotone" dataKey="user" stroke="#8884d8" />
              <Line type="monotone" dataKey="index" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Row>
    </Container>
  );
};

export default Performance;
