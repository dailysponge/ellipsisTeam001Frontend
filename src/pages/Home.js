import { schemeSpectral } from 'd3-scale-chromatic';
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
    { name: 'Group A', value: 400, percentage: 0.4 },
    { name: 'Group B', value: 300, percentage: 0.4 }
  ];

  const fakePieData2 = [
    { name: 'Ticker 01', value: 400, percentage: 0.4 },
    { name: 'Ticker 02', value: 400, percentage: 0.4 },
    { name: 'Ticker 03', value: 400, percentage: 0.4 },
    { name: 'Ticker 04', value: 400, percentage: 0.4 },
    { name: 'Ticker 05', value: 400, percentage: 0.4 },
    { name: 'Ticker 06', value: 400, percentage: 0.4 },
    { name: 'Ticker 07', value: 400, percentage: 0.4 },
    { name: 'Ticker 08', value: 400, percentage: 0.4 },
    { name: 'Ticker 09', value: 400, percentage: 0.4 },
    { name: 'Ticker 10', value: 400, percentage: 0.4 },
    { name: 'Ticker 11', value: 400, percentage: 0.4 },
    { name: 'Ticker 12', value: 400, percentage: 0.4 },
    { name: 'Ticker 13', value: 400, percentage: 0.4 },
    { name: 'Ticker 14', value: 400, percentage: 0.4 },
    { name: 'Ticker 15', value: 400, percentage: 0.4 },
    { name: 'Ticker 16', value: 400, percentage: 0.4 },
    { name: 'Ticker 17', value: 400, percentage: 0.4 },
    { name: 'Ticker 18', value: 400, percentage: 0.4 },
    { name: 'Ticker 19', value: 400, percentage: 0.4 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="custom-tooltip-ticker-percentage">{`${payload[0].name} : ${payload[0].payload.payload.percentage}%`}</p>
          <p className="custom-tooltip-ticker-details">${payload[0].value}</p>
        </div>
      );
    }
  };

  const COLORS1 =
    schemeSpectral[
      fakePieData.length >= 11
        ? 11
        : fakePieData.length < 3
        ? 3
        : fakePieData.length
    ];
  const COLORS2 =
    schemeSpectral[
      fakePieData2.length >= 11
        ? 11
        : fakePieData2.length < 3
        ? 3
        : fakePieData2.length
    ];

  return (
    <div className="home">
      <Container style={{ height: '100vh' }}>
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
                    {fakePieData.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS1[index % COLORS1.length]}
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
                <PieChart width={500} height={400}>
                  <Pie
                    data={fakePieData2}
                    dataKey="value"
                    fill="#8884d8"
                    innerRadius={100}
                  >
                    {fakePieData2.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS2[index % COLORS2.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
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
