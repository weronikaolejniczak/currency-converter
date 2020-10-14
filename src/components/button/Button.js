import React from 'react';
import './style.css';

const Button = ({color, children}) => { // function Button(props) {
    // const { color } = props;
    return (
    <button className="button">{children}</button>
    );
}

Button.defaultProps = {
    label: 'Enter label for button'
}

export default Button;
