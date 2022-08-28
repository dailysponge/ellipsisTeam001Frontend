import { schemeRdGy, schemeSpectral } from 'd3-scale-chromatic';
import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';
import InfoBar from '../components/InfoBar';
import { apiRoutes } from '../api/apiRoutes';
import useFetch from '../hooks/useFetch';
import useFetch2 from '../hooks/useFetch2';

const Home = () => {
  const {
    data: pieData1,
    loading: pieLoading1,
    error: pieError1
  } = useFetch(apiRoutes.allocation + '/123456');

  const {
    data: data2,
    loading: loading2,
    error: error2
  } = useFetch2(apiRoutes.report + '/123456');
  let pieData2 = [];
  if (data2 && data2.data && data2.data.userAssetReport) {
    pieData2 = data2.data.userAssetReport;
  }
  let amountInvested = 0;
  if (
    pieData1 &&
    pieData1.data &&
    pieData1.data.userAssetAllocation &&
    pieData1.data.userAssetAllocation.amountInvested
  ) {
    amountInvested = pieData1.data.userAssetAllocation.amountInvested;
  }

  let pieData = [];
  if (pieData1 && pieData1.data && pieData1.data.userAssetAllocation) {
    pieData = [
      {
        name: 'Amount Held',
        value: pieData1.data.userAssetAllocation.amountHeld
      },
      {
        name: 'Amount Invested',
        value: pieData1.data.userAssetAllocation.amountInvested
      }
    ];
  }

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

  const fakePieData2 = [
    { name: 'Ticker 01', value: 400 },
    { name: 'Ticker 02', value: 400 },
    { name: 'Ticker 03', value: 400 },
    { name: 'Ticker 04', value: 400 },
    { name: 'Ticker 05', value: 400 },
    { name: 'Ticker 06', value: 400 },
    { name: 'Ticker 07', value: 400 },
    { name: 'Ticker 08', value: 400 },
    { name: 'Ticker 09', value: 400 },
    { name: 'Ticker 10', value: 400 },
    { name: 'Ticker 11', value: 400 },
    { name: 'Ticker 12', value: 400 },
    { name: 'Ticker 13', value: 400 },
    { name: 'Ticker 14', value: 400 },
    { name: 'Ticker 15', value: 400 },
    { name: 'Ticker 16', value: 400 },
    { name: 'Ticker 17', value: 400 },
    { name: 'Ticker 18', value: 400 },
    { name: 'Ticker 19', value: 4000 }
  ];

  const totalValue = pieData.reduce((acc, currentObject) => {
    return acc + currentObject.value;
  }, 0);

  const CustomPieReportTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      let payloadPercentageOfTotal = (payload[0].value / totalValue) * 100;
      return (
        <div className="custom-tooltip">
          <p style={{ margin: '0', padding: '0' }}>
            {`${
              payload[0].payload.tickerName
            } (${payloadPercentageOfTotal.toFixed(2)}%)`}
            <br />
            {payload[0].name} (${payload[0].value})
          </p>
        </div>
      );
    }
  };

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

  const COLORS1 =
    schemeRdGy[
      pieData.length >= 11 ? 11 : pieData.length < 3 ? 3 : pieData.length
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
    <div className="home bg-fix">
      <InfoBar
        investData={amountInvested.toFixed(2)}
        totalValue={totalValue.toFixed(2)}
      />
      <Container>
        <Row>
          <Col>
            <Link
              to={'/dashboard/performance'}
              style={{
                textDecoration: 'none',
                margin: '0',
                padding: '0',
                color: 'white'
              }}
            >
              <div className="performance-chart dash-element">
                <h3>Performance</h3>
                <LineChart
                  width={500}
                  height={600}
                  data={fakePerformanceData}
                  margin={{ top: 10, right: 10, left: 15, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(tick) => `${tick}%`} />
                  <Tooltip content={<CustomPerformanceLineTooltip />} />
                  <Line type="monotone" dataKey="user" stroke="green" />
                </LineChart>
              </div>
            </Link>
          </Col>
          <Col>
            <Row>
              <div className="asset-allocation dash-element">
                <h3>Asset Allocation</h3>
                {pieData1 &&
                  pieData1.data &&
                  pieData1.data.userAssetAllocation && (
                    <PieChart width={500} height={400}>
                      <Pie data={pieData} dataKey="value" fill="#8884d8">
                        {pieData.map((_entry, index) => (
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
                  )}
              </div>
            </Row>
            <Row>
              <Link
                to={'/dashboard/report'}
                style={{
                  textDecoration: 'none',
                  margin: '0',
                  padding: '0',
                  color: 'white'
                }}
              >
                <div className="report dash-element">
                  <h3>Asset Report</h3>
                  {data2 && data2.data && data2.data.userAssetReport && (
                    <PieChart width={500} height={400}>
                      <Pie
                        data={pieData2}
                        dataKey="amount"
                        fill="#8884d8"
                        innerRadius={100}
                      >
                        {pieData2.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS2[index % COLORS2.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomPieReportTooltip />} />
                    </PieChart>
                  )}
                </div>
              </Link>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
