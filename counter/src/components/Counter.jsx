import React, { useState } from "react";
import CounterScreen from "./counterScreen";
import DescButton from "./DescButton";
import IncButton from "./IncButton";
import Parity from "./Parity";
import ResetButton from "./ResetButton";
import './Counter.css';

const Counter = () => {

  const [count, setCount] = useState(0)
  const theme = count === 0 ? 'neutral' : count % 2 === 0 ? 'even' : 'odd'


  return (
    <div className={`${theme} counterBlock`}>
      <CounterScreen count={count} />
      <Parity count={count} />
      <div className="buttonBlock">
        <DescButton count={count} setCount={setCount} />
        <ResetButton count={count} setCount={setCount} />
        <IncButton count={count} setCount={setCount} />


      </div>

    </div>
  );
}

export default Counter