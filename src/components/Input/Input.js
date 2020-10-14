import React from 'react';
import './style.css';

const Input = ({type, placeholder, setValue}) => {
    return (
        <input
            className="input"
            type={type}
            placeholder={placeholder}
            onChange={(event) => setValue(event.target.value)}
        />
    );
}

Input.defaultProps = {
    type: 'number',
    placeholder: 'Amount'
}

export default Input;
