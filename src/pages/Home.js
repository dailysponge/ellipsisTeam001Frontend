import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const Home = () => {
  const COLORS = [
    '#FFEC21',
    '#378AFF',
    '#FFA32F',
    '#F54F52',
    '#93F03B',
    '#9552EA'
  ];

  const fakePerformanceData = [
    {
      name: 'Date 1',
      line1: 2321,
      line2: 9391
    },
    {
      name: 'Date 2',
      line1: 4982,
      line2: 8741
    },
    {
      name: 'Date 3',
      line1: -3321,
      line2: -5932
    },
    {
      name: 'Date 4',
      line1: 8392,
      line2: 3982
    },
    {
      name: 'Date 5',
      line1: 9832,
      line2: 6523
    },
    {
      name: 'Date 6',
      line1: 2313,
      line2: 8490
    }
  ];

  const fakePieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 }
  ];

  const fakePieData2 = [
    { name: 'Ticker 1', value: 400 },
    { name: 'Ticker 2', value: 300 },
    { name: 'Ticker 3', value: 2313 },
    { name: 'Ticker 4', value: 2132 },
    { name: 'Ticker 5', value: 8381 },
    { name: 'Ticker 6', value: 8321 }
  ];

  return (
    <div className="home">
      <Container style={{height:'100vh'}}>
        <Row>
          <Col>
            <div className="performance-chart dash-element">
              <h3>Performance</h3>
              <LineChart
                width={500}
                height={600}
                data={fakePerformanceData}
                margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="line1" stroke="#8884d8" />
              </LineChart>
            </div>
          </Col>
          <Col>
            <Row>
              <div className="asset-allocation dash-element">
                <h3>Asset Allocation</h3>
                <PieChart width={500} height={400}>
                  <Pie data={fakePieData} dataKey="value" fill="#8884d8">
                    {fakePieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                  />
                  <Tooltip />
                </PieChart>
              </div>
            </Row>
            <Row>
              <div className="report dash-element">
                <h3>Asset Report</h3>
                <PieChart width={500} height={400} >
                  <Pie data={fakePieData2} dataKey="value" fill="#8884d8" innerRadius={100}>
                    {fakePieData2.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
