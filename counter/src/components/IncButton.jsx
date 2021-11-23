import React from "react";
const IncButton = (props) => {
    const incrementCount = () => {
        props.setCount(props.count + 1)

    }
    return (
        <button className="incDesc" onClick={incrementCount}>
            +
        </button>
    );
}

export default IncButton