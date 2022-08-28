import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { apiRoutes } from '../api/apiRoutes';
import useFetch from '../hooks/useFetch';

function InfoBar({ investData, totalValue }) {
  const { data, loading, error } = useFetch(apiRoutes.transaction + '/123456');
  console.log(data);
  return (
    <Navbar bg="" variant="" className="infobar">
      <Container className="infobar-container">
        <Navbar.Text>Amount Invested: {investData}</Navbar.Text>
        <Navbar.Text>Deposit: {totalValue}</Navbar.Text>
        <Navbar.Text>ROR:</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default InfoBar;
