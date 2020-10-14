import React from 'react';
import './style.css';

const Select = ({value, setCurrency, currencies}) => {
    return (
        <select
            className="select-container"
            value={value}
            onChange={(event) => setCurrency(event.target.value)}
            >
            {currencies.map((element) => <option key={`curr-${element}`} value={element}>{element}</option>)}
        </select>
    );
}

export default Select;
