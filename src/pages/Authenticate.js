import PinInput from 'react-pin-input';
import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { buildQueries } from '@testing-library/react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Authenticate = () => {
  const navigate = useNavigate();
  const [render, setRender] = useState(false);
  if (!!JSON.parse(localStorage.getItem('user'))) {
    navigate('/dashboard/home');
  }

  const onSubmit = () => {
    //api call

    // Add details to window localstorage
    localStorage.setItem(
      'user',
      JSON.stringify({
        userID: 'USERID HERE'
      })
    );
    navigate('/dashboard/home');
  };
  const [counter, setCounter] = React.useState(60);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    setRender(true);
  }, []);

  return render ? (
    <div className="authenticate-container">
      <div>
        <h1>KEYPIN</h1>
      </div>
      <div>
        <PinInput
          length={6}
          initialValue=""
          secret
          // onChange={(value, index) => {}}
          type="numeric"
          inputMode="number"
          style={{ padding: '10px' }}
          inputStyle={{ borderColor: 'red', color: 'white' }}
          inputFocusStyle={{ borderColor: 'blue' }}
          onComplete={(value, index) => {
            onSubmit();
          }} //to change console.log to onSubmit
          autoSelect={true}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />
      </div>
      <div className="authenticate-container2">
        <CountdownCircleTimer
          isPlaying
          duration={61}
          initialRemainingTime={61}
          colors="url(#your-unique-id)"
        >
          {({ remainingTime }) => counter}
        </CountdownCircleTimer>
        <svg>
          <defs>
            <linearGradient id="your-unique-id" x1="1" y1="0" x2="0" y2="0">
              <stop offset="5%" stopColor="gold" />
              <stop offset="95%" stopColor="red" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Authenticate;
