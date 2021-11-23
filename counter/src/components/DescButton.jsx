import React from "react";
const DescButton = (props) => {
    const decrementCount = () => {
        if(props.count > 0) props.setCount(props.count-1)
       
    }
    return (
      <button className="incDesc" onClick={decrementCount}>
      -
      </button>
    );
  }

  export default DescButton