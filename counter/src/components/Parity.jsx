import React from "react";
const Parity = (props) => {

    return (
        <div className="parity">
            {props.count === 0 ? 'Введеное число равно нулю' : props.count % 2 === 0 ? 'Введено четное число' : 'Введено нечетное число'}
        </div>
    );
}
export default Parity;