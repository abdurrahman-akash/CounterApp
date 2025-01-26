import React, { useState } from 'react';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CustomButton from './components/CustomButton';


function App() {

  const [counter, setCounter] = useState(0); // counter state

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  const reset = () => {
    setCounter(0);
  }

  return (
    <div className="App">
      <CustomButton /> {/* Add the custom button */}
      {/* Outer card  */}
      <div className="counter_container">
        <div className="counter_header">
          <h2>Counter App</h2>
        </div>
        <div className="counter_display">
          <span id='counter-value'>{counter}</span>
        </div>

        <div className="counter_button">
          <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={increment}>+</Button>
            <button class="button" onClick={reset}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="0 0 20 20"
                height="20"
                fill="none"
                class="svg-icon"
              >
                <g stroke-width="1.5" stroke-linecap="round" stroke="#ff342b">
                  <path
                    d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"
                  ></path>
                  <path
                    d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"
                  ></path>
                </g>
              </svg>
              <span class="lable">Repeat</span>
            </button>
            {/* <Button variant="contained" onClick={reset}>Reset</Button> */}
            <Button variant="outlined" onClick={decrement}>-</Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default App;
