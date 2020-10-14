import React from 'react';
import './style.css';

const Button = ({type, children}) => { // function Button(props) {
    // const { color } = props;
    return (
        <button
            className="button"
            type={type}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: 'submit'
}

export default Button;
