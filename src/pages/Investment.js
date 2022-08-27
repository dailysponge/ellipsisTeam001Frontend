import { Button, Form, Row, Col, InputGroup, Container } from 'react-bootstrap';
import { useState, useContext } from 'react';

const Investment = () => {
  //Fetch current account balance
  const accountBalance = 100.0

  const handleSubmit = (event) => {
    event.preventDefault();
    //run api to send data
  };

  const [investmentData, setInvestmentData] = useState({
    bankName: '',
    bankNo: '',
    amount: ''
  });

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    console.log(investmentData)
    setInvestmentData((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  };

  const handleWithdraw = () => {
    //run api to send data
    console.log(investmentData)
  }

  const handleDeposit = () => {
    //run api to send data
    console.log(investmentData)
  }

  return (
    <div>
      Investment
      Account Balance: ${accountBalance}
      <Form className="investment-form" onSubmit={handleSubmit}>
        <Form.Label>
          <h3>Bank Name:</h3>
        </Form.Label>
        <Form.Select name='bankName' aria-label="Default select example" onChange={handleChange}>
          <option value="DBS">DBS</option>
          <option value="UOB">UOB</option>
          <option value="OCBC">OCBC</option>
        </Form.Select>

        <Form.Group controlId="validationCustom01">
          <Form.Label>
            <h3>Bank No.:</h3>
          </Form.Label>
          <Form.Control
            // as="textarea"
            type='number'
            rows={1}
            required
            name="bankNo"
            placeholder="Enter your bank no. here."
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="validationCustom02">
          <Form.Label>
            <h3>Amount:</h3>
          </Form.Label>
          <Form.Control
            required
            type="number"
            name="amount"
            placeholder="Enter your desired amount here."
            onChange={handleChange}
          />
        </Form.Group>
        <div>
          <Button onClick={handleWithdraw}>Withdraw</Button>
          <Button onClick={handleDeposit}>Deposit</Button>
        </div>
      </Form>
    </div>
  );
};

export default Investment;
