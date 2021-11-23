import React from "react";
const ResetButton = (props) => {
  const resetCount = () => {
    props.setCount(0)
  }
  return (
    <button className="reset" onClick={resetCount}>
      reset
    </button>
  );
}

export default ResetButton