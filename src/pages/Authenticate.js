import PinInput from 'react-pin-input';
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { buildQueries } from '@testing-library/react';

const Authenticate = () => {
  const onSubmit = () => {
    //api call
  };
  const [counter, setCounter] = React.useState(60);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);


  
  return (
    <div>
      <h1>KEYPIN</h1>
      <PinInput
        length={6}
        initialValue=""
        secret
        onChange={(value, index) => {}}
        type="numeric"
        inputMode="number"
        style={{ padding: '10px' }}
        inputStyle={{ borderColor: 'red' }}
        inputFocusStyle={{ borderColor: 'blue' }}
        onComplete={(value, index) => {
          console.log(value);
        }} //to change console.log to onSubmit
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />
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
  );
};

export default Authenticate;
