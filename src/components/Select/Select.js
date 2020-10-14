import React from 'react';

const Select = ({value, setCurrency}) => {
    return (
        <select value={value} onChange={(event) => setCurrency(event.target.value)}>
            <option value="USD">USD</option>
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
        </select>
    );
}

export default Select;
