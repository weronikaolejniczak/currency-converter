import React from 'react';

const Select = ({value, setCurrency, currencies}) => {
    return (
        <select value={value} onChange={(event) => setCurrency(event.target.value)}>
            {currencies.map((element) => <option key={`curr-${element}`} value={element}>{element}</option>)}
        </select>
    );
}

export default Select;
