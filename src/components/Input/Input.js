import React from 'react';

const Input = ({type, placeholder, setValue}) => {
    return (
        <input
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
